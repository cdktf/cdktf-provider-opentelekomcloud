# `taurusdbMysqlSqlControlRuleV3` Submodule <a name="`taurusdbMysqlSqlControlRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaurusdbMysqlSqlControlRuleV3 <a name="TaurusdbMysqlSqlControlRuleV3" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3 opentelekomcloud_taurusdb_mysql_sql_control_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlSqlControlRuleV3(Construct Scope, string Id, TaurusdbMysqlSqlControlRuleV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config">TaurusdbMysqlSqlControlRuleV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config">TaurusdbMysqlSqlControlRuleV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.putTimeouts"></a>

```csharp
private void PutTimeouts(TaurusdbMysqlSqlControlRuleV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts">TaurusdbMysqlSqlControlRuleV3Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TaurusdbMysqlSqlControlRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlSqlControlRuleV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlSqlControlRuleV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlSqlControlRuleV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlSqlControlRuleV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TaurusdbMysqlSqlControlRuleV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TaurusdbMysqlSqlControlRuleV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TaurusdbMysqlSqlControlRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TaurusdbMysqlSqlControlRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference">TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.nodeIdInput">NodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.sqlTypeInput">SqlTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts">TaurusdbMysqlSqlControlRuleV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.sqlType">SqlType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.timeouts"></a>

```csharp
public TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference">TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.maxConcurrencyInput"></a>

```csharp
public double MaxConcurrencyInput { get; }
```

- *Type:* double

---

##### `NodeIdInput`<sup>Optional</sup> <a name="NodeIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.nodeIdInput"></a>

```csharp
public string NodeIdInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `SqlTypeInput`<sup>Optional</sup> <a name="SqlTypeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.sqlTypeInput"></a>

```csharp
public string SqlTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.timeoutsInput"></a>

```csharp
public IResolvable|TaurusdbMysqlSqlControlRuleV3Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts">TaurusdbMysqlSqlControlRuleV3Timeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; }
```

- *Type:* double

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.sqlType"></a>

```csharp
public string SqlType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TaurusdbMysqlSqlControlRuleV3Config <a name="TaurusdbMysqlSqlControlRuleV3Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlSqlControlRuleV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceId,
    double MaxConcurrency,
    string NodeId,
    string Pattern,
    string SqlType,
    string Id = null,
    TaurusdbMysqlSqlControlRuleV3Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#instance_id TaurusdbMysqlSqlControlRuleV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#max_concurrency TaurusdbMysqlSqlControlRuleV3#max_concurrency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.nodeId">NodeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#node_id TaurusdbMysqlSqlControlRuleV3#node_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#pattern TaurusdbMysqlSqlControlRuleV3#pattern}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.sqlType">SqlType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#sql_type TaurusdbMysqlSqlControlRuleV3#sql_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#id TaurusdbMysqlSqlControlRuleV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts">TaurusdbMysqlSqlControlRuleV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#instance_id TaurusdbMysqlSqlControlRuleV3#instance_id}.

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#max_concurrency TaurusdbMysqlSqlControlRuleV3#max_concurrency}.

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.nodeId"></a>

```csharp
public string NodeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#node_id TaurusdbMysqlSqlControlRuleV3#node_id}.

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#pattern TaurusdbMysqlSqlControlRuleV3#pattern}.

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.sqlType"></a>

```csharp
public string SqlType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#sql_type TaurusdbMysqlSqlControlRuleV3#sql_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#id TaurusdbMysqlSqlControlRuleV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Config.property.timeouts"></a>

```csharp
public TaurusdbMysqlSqlControlRuleV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts">TaurusdbMysqlSqlControlRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#timeouts TaurusdbMysqlSqlControlRuleV3#timeouts}

---

### TaurusdbMysqlSqlControlRuleV3Timeouts <a name="TaurusdbMysqlSqlControlRuleV3Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlSqlControlRuleV3Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#create TaurusdbMysqlSqlControlRuleV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#delete TaurusdbMysqlSqlControlRuleV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#update TaurusdbMysqlSqlControlRuleV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#create TaurusdbMysqlSqlControlRuleV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#delete TaurusdbMysqlSqlControlRuleV3#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_sql_control_rule_v3#update TaurusdbMysqlSqlControlRuleV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference <a name="TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts">TaurusdbMysqlSqlControlRuleV3Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TaurusdbMysqlSqlControlRuleV3Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlSqlControlRuleV3.TaurusdbMysqlSqlControlRuleV3Timeouts">TaurusdbMysqlSqlControlRuleV3Timeouts</a>

---



