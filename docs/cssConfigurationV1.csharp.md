# `cssConfigurationV1` Submodule <a name="`cssConfigurationV1` Submodule" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CssConfigurationV1 <a name="CssConfigurationV1" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1 opentelekomcloud_css_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssConfigurationV1(Construct Scope, string Id, CssConfigurationV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config">CssConfigurationV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config">CssConfigurationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetAutoCreateIndex">ResetAutoCreateIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowCredentials">ResetHttpCorsAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowHeaders">ResetHttpCorsAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowMethods">ResetHttpCorsAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowOrigin">ResetHttpCorsAllowOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsEnabled">ResetHttpCorsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsMaxAge">ResetHttpCorsMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetIndicesQueriesCacheSize">ResetIndicesQueriesCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetReindexRemoteWhitelist">ResetReindexRemoteWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetThreadPoolForceMergeSize">ResetThreadPoolForceMergeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts"></a>

```csharp
private void PutTimeouts(CssConfigurationV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

---

##### `ResetAutoCreateIndex` <a name="ResetAutoCreateIndex" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetAutoCreateIndex"></a>

```csharp
private void ResetAutoCreateIndex()
```

##### `ResetHttpCorsAllowCredentials` <a name="ResetHttpCorsAllowCredentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowCredentials"></a>

```csharp
private void ResetHttpCorsAllowCredentials()
```

##### `ResetHttpCorsAllowHeaders` <a name="ResetHttpCorsAllowHeaders" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowHeaders"></a>

```csharp
private void ResetHttpCorsAllowHeaders()
```

##### `ResetHttpCorsAllowMethods` <a name="ResetHttpCorsAllowMethods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowMethods"></a>

```csharp
private void ResetHttpCorsAllowMethods()
```

##### `ResetHttpCorsAllowOrigin` <a name="ResetHttpCorsAllowOrigin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsAllowOrigin"></a>

```csharp
private void ResetHttpCorsAllowOrigin()
```

##### `ResetHttpCorsEnabled` <a name="ResetHttpCorsEnabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsEnabled"></a>

```csharp
private void ResetHttpCorsEnabled()
```

##### `ResetHttpCorsMaxAge` <a name="ResetHttpCorsMaxAge" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetHttpCorsMaxAge"></a>

```csharp
private void ResetHttpCorsMaxAge()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndicesQueriesCacheSize` <a name="ResetIndicesQueriesCacheSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetIndicesQueriesCacheSize"></a>

```csharp
private void ResetIndicesQueriesCacheSize()
```

##### `ResetReindexRemoteWhitelist` <a name="ResetReindexRemoteWhitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetReindexRemoteWhitelist"></a>

```csharp
private void ResetReindexRemoteWhitelist()
```

##### `ResetThreadPoolForceMergeSize` <a name="ResetThreadPoolForceMergeSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetThreadPoolForceMergeSize"></a>

```csharp
private void ResetThreadPoolForceMergeSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CssConfigurationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CssConfigurationV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CssConfigurationV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CssConfigurationV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CssConfigurationV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CssConfigurationV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CssConfigurationV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CssConfigurationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CssConfigurationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference">CssConfigurationV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndexInput">AutoCreateIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentialsInput">HttpCorsAllowCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeadersInput">HttpCorsAllowHeadersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethodsInput">HttpCorsAllowMethodsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOriginInput">HttpCorsAllowOriginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabledInput">HttpCorsEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAgeInput">HttpCorsMaxAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSizeInput">IndicesQueriesCacheSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelistInput">ReindexRemoteWhitelistInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSizeInput">ThreadPoolForceMergeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndex">AutoCreateIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentials">HttpCorsAllowCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeaders">HttpCorsAllowHeaders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethods">HttpCorsAllowMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOrigin">HttpCorsAllowOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabled">HttpCorsEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAge">HttpCorsMaxAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSize">IndicesQueriesCacheSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelist">ReindexRemoteWhitelist</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSize">ThreadPoolForceMergeSize</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeouts"></a>

```csharp
public CssConfigurationV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference">CssConfigurationV1TimeoutsOutputReference</a>

---

##### `AutoCreateIndexInput`<sup>Optional</sup> <a name="AutoCreateIndexInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndexInput"></a>

```csharp
public string AutoCreateIndexInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `HttpCorsAllowCredentialsInput`<sup>Optional</sup> <a name="HttpCorsAllowCredentialsInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentialsInput"></a>

```csharp
public string HttpCorsAllowCredentialsInput { get; }
```

- *Type:* string

---

##### `HttpCorsAllowHeadersInput`<sup>Optional</sup> <a name="HttpCorsAllowHeadersInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeadersInput"></a>

```csharp
public string HttpCorsAllowHeadersInput { get; }
```

- *Type:* string

---

##### `HttpCorsAllowMethodsInput`<sup>Optional</sup> <a name="HttpCorsAllowMethodsInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethodsInput"></a>

```csharp
public string HttpCorsAllowMethodsInput { get; }
```

- *Type:* string

---

##### `HttpCorsAllowOriginInput`<sup>Optional</sup> <a name="HttpCorsAllowOriginInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOriginInput"></a>

```csharp
public string HttpCorsAllowOriginInput { get; }
```

- *Type:* string

---

##### `HttpCorsEnabledInput`<sup>Optional</sup> <a name="HttpCorsEnabledInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabledInput"></a>

```csharp
public string HttpCorsEnabledInput { get; }
```

- *Type:* string

---

##### `HttpCorsMaxAgeInput`<sup>Optional</sup> <a name="HttpCorsMaxAgeInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAgeInput"></a>

```csharp
public string HttpCorsMaxAgeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndicesQueriesCacheSizeInput`<sup>Optional</sup> <a name="IndicesQueriesCacheSizeInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSizeInput"></a>

```csharp
public string IndicesQueriesCacheSizeInput { get; }
```

- *Type:* string

---

##### `ReindexRemoteWhitelistInput`<sup>Optional</sup> <a name="ReindexRemoteWhitelistInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelistInput"></a>

```csharp
public string ReindexRemoteWhitelistInput { get; }
```

- *Type:* string

---

##### `ThreadPoolForceMergeSizeInput`<sup>Optional</sup> <a name="ThreadPoolForceMergeSizeInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSizeInput"></a>

```csharp
public string ThreadPoolForceMergeSizeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.timeoutsInput"></a>

```csharp
public IResolvable|CssConfigurationV1Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

---

##### `AutoCreateIndex`<sup>Required</sup> <a name="AutoCreateIndex" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.autoCreateIndex"></a>

```csharp
public string AutoCreateIndex { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `HttpCorsAllowCredentials`<sup>Required</sup> <a name="HttpCorsAllowCredentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowCredentials"></a>

```csharp
public string HttpCorsAllowCredentials { get; }
```

- *Type:* string

---

##### `HttpCorsAllowHeaders`<sup>Required</sup> <a name="HttpCorsAllowHeaders" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowHeaders"></a>

```csharp
public string HttpCorsAllowHeaders { get; }
```

- *Type:* string

---

##### `HttpCorsAllowMethods`<sup>Required</sup> <a name="HttpCorsAllowMethods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowMethods"></a>

```csharp
public string HttpCorsAllowMethods { get; }
```

- *Type:* string

---

##### `HttpCorsAllowOrigin`<sup>Required</sup> <a name="HttpCorsAllowOrigin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsAllowOrigin"></a>

```csharp
public string HttpCorsAllowOrigin { get; }
```

- *Type:* string

---

##### `HttpCorsEnabled`<sup>Required</sup> <a name="HttpCorsEnabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsEnabled"></a>

```csharp
public string HttpCorsEnabled { get; }
```

- *Type:* string

---

##### `HttpCorsMaxAge`<sup>Required</sup> <a name="HttpCorsMaxAge" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.httpCorsMaxAge"></a>

```csharp
public string HttpCorsMaxAge { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndicesQueriesCacheSize`<sup>Required</sup> <a name="IndicesQueriesCacheSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.indicesQueriesCacheSize"></a>

```csharp
public string IndicesQueriesCacheSize { get; }
```

- *Type:* string

---

##### `ReindexRemoteWhitelist`<sup>Required</sup> <a name="ReindexRemoteWhitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.reindexRemoteWhitelist"></a>

```csharp
public string ReindexRemoteWhitelist { get; }
```

- *Type:* string

---

##### `ThreadPoolForceMergeSize`<sup>Required</sup> <a name="ThreadPoolForceMergeSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.threadPoolForceMergeSize"></a>

```csharp
public string ThreadPoolForceMergeSize { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CssConfigurationV1Config <a name="CssConfigurationV1Config" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssConfigurationV1Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterId,
    string AutoCreateIndex = null,
    string HttpCorsAllowCredentials = null,
    string HttpCorsAllowHeaders = null,
    string HttpCorsAllowMethods = null,
    string HttpCorsAllowOrigin = null,
    string HttpCorsEnabled = null,
    string HttpCorsMaxAge = null,
    string Id = null,
    string IndicesQueriesCacheSize = null,
    string ReindexRemoteWhitelist = null,
    string ThreadPoolForceMergeSize = null,
    CssConfigurationV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.clusterId">ClusterId</a></code> | <code>string</code> | The CSS cluster ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.autoCreateIndex">AutoCreateIndex</a></code> | <code>string</code> | Whether to auto-create index. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowCredentials">HttpCorsAllowCredentials</a></code> | <code>string</code> | Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowHeaders">HttpCorsAllowHeaders</a></code> | <code>string</code> | Headers allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowMethods">HttpCorsAllowMethods</a></code> | <code>string</code> | Methods allowed for cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowOrigin">HttpCorsAllowOrigin</a></code> | <code>string</code> | Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsEnabled">HttpCorsEnabled</a></code> | <code>string</code> | Whether to allow cross-domain access. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsMaxAge">HttpCorsMaxAge</a></code> | <code>string</code> | Cache duration of the browser. The cache is automatically cleared after the time range you specify. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#id CssConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.indicesQueriesCacheSize">IndicesQueriesCacheSize</a></code> | <code>string</code> | Cache size in the query phase. Value range: **1** to **100**. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.reindexRemoteWhitelist">ReindexRemoteWhitelist</a></code> | <code>string</code> | Configured for migrating data from the current cluster to the target cluster through the reindex API. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.threadPoolForceMergeSize">ThreadPoolForceMergeSize</a></code> | <code>string</code> | Queue size in the force merge thread pool. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The CSS cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#cluster_id CssConfigurationV1#cluster_id}

---

##### `AutoCreateIndex`<sup>Optional</sup> <a name="AutoCreateIndex" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.autoCreateIndex"></a>

```csharp
public string AutoCreateIndex { get; set; }
```

- *Type:* string

Whether to auto-create index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#auto_create_index CssConfigurationV1#auto_create_index}

---

##### `HttpCorsAllowCredentials`<sup>Optional</sup> <a name="HttpCorsAllowCredentials" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowCredentials"></a>

```csharp
public string HttpCorsAllowCredentials { get; set; }
```

- *Type:* string

Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#http_cors_allow_credentials CssConfigurationV1#http_cors_allow_credentials}

---

##### `HttpCorsAllowHeaders`<sup>Optional</sup> <a name="HttpCorsAllowHeaders" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowHeaders"></a>

```csharp
public string HttpCorsAllowHeaders { get; set; }
```

- *Type:* string

Headers allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#http_cors_allow_headers CssConfigurationV1#http_cors_allow_headers}

---

##### `HttpCorsAllowMethods`<sup>Optional</sup> <a name="HttpCorsAllowMethods" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowMethods"></a>

```csharp
public string HttpCorsAllowMethods { get; set; }
```

- *Type:* string

Methods allowed for cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#http_cors_allow_methods CssConfigurationV1#http_cors_allow_methods}

---

##### `HttpCorsAllowOrigin`<sup>Optional</sup> <a name="HttpCorsAllowOrigin" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsAllowOrigin"></a>

```csharp
public string HttpCorsAllowOrigin { get; set; }
```

- *Type:* string

Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#http_cors_allow_origin CssConfigurationV1#http_cors_allow_origin}

---

##### `HttpCorsEnabled`<sup>Optional</sup> <a name="HttpCorsEnabled" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsEnabled"></a>

```csharp
public string HttpCorsEnabled { get; set; }
```

- *Type:* string

Whether to allow cross-domain access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#http_cors_enabled CssConfigurationV1#http_cors_enabled}

---

##### `HttpCorsMaxAge`<sup>Optional</sup> <a name="HttpCorsMaxAge" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.httpCorsMaxAge"></a>

```csharp
public string HttpCorsMaxAge { get; set; }
```

- *Type:* string

Cache duration of the browser. The cache is automatically cleared after the time range you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#http_cors_max_age CssConfigurationV1#http_cors_max_age}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#id CssConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndicesQueriesCacheSize`<sup>Optional</sup> <a name="IndicesQueriesCacheSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.indicesQueriesCacheSize"></a>

```csharp
public string IndicesQueriesCacheSize { get; set; }
```

- *Type:* string

Cache size in the query phase. Value range: **1** to **100**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#indices_queries_cache_size CssConfigurationV1#indices_queries_cache_size}

---

##### `ReindexRemoteWhitelist`<sup>Optional</sup> <a name="ReindexRemoteWhitelist" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.reindexRemoteWhitelist"></a>

```csharp
public string ReindexRemoteWhitelist { get; set; }
```

- *Type:* string

Configured for migrating data from the current cluster to the target cluster through the reindex API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#reindex_remote_whitelist CssConfigurationV1#reindex_remote_whitelist}

---

##### `ThreadPoolForceMergeSize`<sup>Optional</sup> <a name="ThreadPoolForceMergeSize" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.threadPoolForceMergeSize"></a>

```csharp
public string ThreadPoolForceMergeSize { get; set; }
```

- *Type:* string

Queue size in the force merge thread pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#thread_pool_force_merge_size CssConfigurationV1#thread_pool_force_merge_size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Config.property.timeouts"></a>

```csharp
public CssConfigurationV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#timeouts CssConfigurationV1#timeouts}

---

### CssConfigurationV1Timeouts <a name="CssConfigurationV1Timeouts" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssConfigurationV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#create CssConfigurationV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#delete CssConfigurationV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#create CssConfigurationV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/css_configuration_v1#delete CssConfigurationV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CssConfigurationV1TimeoutsOutputReference <a name="CssConfigurationV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssConfigurationV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CssConfigurationV1Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.cssConfigurationV1.CssConfigurationV1Timeouts">CssConfigurationV1Timeouts</a>

---



