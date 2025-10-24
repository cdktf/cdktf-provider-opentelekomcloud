# `taurusdbMysqlProxyV3` Submodule <a name="`taurusdbMysqlProxyV3` Submodule" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaurusdbMysqlProxyV3 <a name="TaurusdbMysqlProxyV3" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3 opentelekomcloud_taurusdb_mysql_proxy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3(Construct Scope, string Id, TaurusdbMysqlProxyV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config">TaurusdbMysqlProxyV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config">TaurusdbMysqlProxyV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight">PutMasterNodeWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putReadonlyNodesWeight">PutReadonlyNodesWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetMasterNodeWeight">ResetMasterNodeWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyMode">ResetProxyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyName">ResetProxyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetReadonlyNodesWeight">ResetReadonlyNodesWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMasterNodeWeight` <a name="PutMasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight"></a>

```csharp
private void PutMasterNodeWeight(TaurusdbMysqlProxyV3MasterNodeWeight Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

---

##### `PutReadonlyNodesWeight` <a name="PutReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putReadonlyNodesWeight"></a>

```csharp
private void PutReadonlyNodesWeight(IResolvable|TaurusdbMysqlProxyV3ReadonlyNodesWeight[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putReadonlyNodesWeight.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts"></a>

```csharp
private void PutTimeouts(TaurusdbMysqlProxyV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMasterNodeWeight` <a name="ResetMasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetMasterNodeWeight"></a>

```csharp
private void ResetMasterNodeWeight()
```

##### `ResetProxyMode` <a name="ResetProxyMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyMode"></a>

```csharp
private void ResetProxyMode()
```

##### `ResetProxyName` <a name="ResetProxyName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyName"></a>

```csharp
private void ResetProxyName()
```

##### `ResetReadonlyNodesWeight` <a name="ResetReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetReadonlyNodesWeight"></a>

```csharp
private void ResetReadonlyNodesWeight()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TaurusdbMysqlProxyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlProxyV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlProxyV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlProxyV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

TaurusdbMysqlProxyV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TaurusdbMysqlProxyV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TaurusdbMysqlProxyV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TaurusdbMysqlProxyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TaurusdbMysqlProxyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeight">MasterNodeWeight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference">TaurusdbMysqlProxyV3MasterNodeWeightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList">TaurusdbMysqlProxyV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeight">ReadonlyNodesWeight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList">TaurusdbMysqlProxyV3ReadonlyNodesWeightList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference">TaurusdbMysqlProxyV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavorInput">FlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeightInput">MasterNodeWeightInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNumInput">NodeNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyModeInput">ProxyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyNameInput">ProxyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeightInput">ReadonlyNodesWeightInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavor">Flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNum">NodeNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyMode">ProxyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyName">ProxyName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `MasterNodeWeight`<sup>Required</sup> <a name="MasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeight"></a>

```csharp
public TaurusdbMysqlProxyV3MasterNodeWeightOutputReference MasterNodeWeight { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference">TaurusdbMysqlProxyV3MasterNodeWeightOutputReference</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodes"></a>

```csharp
public TaurusdbMysqlProxyV3NodesList Nodes { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList">TaurusdbMysqlProxyV3NodesList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ReadonlyNodesWeight`<sup>Required</sup> <a name="ReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeight"></a>

```csharp
public TaurusdbMysqlProxyV3ReadonlyNodesWeightList ReadonlyNodesWeight { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList">TaurusdbMysqlProxyV3ReadonlyNodesWeightList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeouts"></a>

```csharp
public TaurusdbMysqlProxyV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference">TaurusdbMysqlProxyV3TimeoutsOutputReference</a>

---

##### `FlavorInput`<sup>Optional</sup> <a name="FlavorInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavorInput"></a>

```csharp
public string FlavorInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `MasterNodeWeightInput`<sup>Optional</sup> <a name="MasterNodeWeightInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeightInput"></a>

```csharp
public TaurusdbMysqlProxyV3MasterNodeWeight MasterNodeWeightInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

---

##### `NodeNumInput`<sup>Optional</sup> <a name="NodeNumInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNumInput"></a>

```csharp
public double NodeNumInput { get; }
```

- *Type:* double

---

##### `ProxyModeInput`<sup>Optional</sup> <a name="ProxyModeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyModeInput"></a>

```csharp
public string ProxyModeInput { get; }
```

- *Type:* string

---

##### `ProxyNameInput`<sup>Optional</sup> <a name="ProxyNameInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyNameInput"></a>

```csharp
public string ProxyNameInput { get; }
```

- *Type:* string

---

##### `ReadonlyNodesWeightInput`<sup>Optional</sup> <a name="ReadonlyNodesWeightInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeightInput"></a>

```csharp
public IResolvable|TaurusdbMysqlProxyV3ReadonlyNodesWeight[] ReadonlyNodesWeightInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeoutsInput"></a>

```csharp
public IResolvable|TaurusdbMysqlProxyV3Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavor"></a>

```csharp
public string Flavor { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNum"></a>

```csharp
public double NodeNum { get; }
```

- *Type:* double

---

##### `ProxyMode`<sup>Required</sup> <a name="ProxyMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyMode"></a>

```csharp
public string ProxyMode { get; }
```

- *Type:* string

---

##### `ProxyName`<sup>Required</sup> <a name="ProxyName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyName"></a>

```csharp
public string ProxyName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TaurusdbMysqlProxyV3Config <a name="TaurusdbMysqlProxyV3Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Flavor,
    string InstanceId,
    double NodeNum,
    string Id = null,
    TaurusdbMysqlProxyV3MasterNodeWeight MasterNodeWeight = null,
    string ProxyMode = null,
    string ProxyName = null,
    IResolvable|TaurusdbMysqlProxyV3ReadonlyNodesWeight[] ReadonlyNodesWeight = null,
    TaurusdbMysqlProxyV3Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.flavor">Flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#flavor TaurusdbMysqlProxyV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#instance_id TaurusdbMysqlProxyV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.nodeNum">NodeNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#node_num TaurusdbMysqlProxyV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.masterNodeWeight">MasterNodeWeight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | master_node_weight block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyMode">ProxyMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#proxy_mode TaurusdbMysqlProxyV3#proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyName">ProxyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#proxy_name TaurusdbMysqlProxyV3#proxy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.readonlyNodesWeight">ReadonlyNodesWeight</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>[]</code> | readonly_nodes_weight block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.flavor"></a>

```csharp
public string Flavor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#flavor TaurusdbMysqlProxyV3#flavor}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#instance_id TaurusdbMysqlProxyV3#instance_id}.

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.nodeNum"></a>

```csharp
public double NodeNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#node_num TaurusdbMysqlProxyV3#node_num}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MasterNodeWeight`<sup>Optional</sup> <a name="MasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.masterNodeWeight"></a>

```csharp
public TaurusdbMysqlProxyV3MasterNodeWeight MasterNodeWeight { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

master_node_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#master_node_weight TaurusdbMysqlProxyV3#master_node_weight}

---

##### `ProxyMode`<sup>Optional</sup> <a name="ProxyMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyMode"></a>

```csharp
public string ProxyMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#proxy_mode TaurusdbMysqlProxyV3#proxy_mode}.

---

##### `ProxyName`<sup>Optional</sup> <a name="ProxyName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyName"></a>

```csharp
public string ProxyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#proxy_name TaurusdbMysqlProxyV3#proxy_name}.

---

##### `ReadonlyNodesWeight`<sup>Optional</sup> <a name="ReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.readonlyNodesWeight"></a>

```csharp
public IResolvable|TaurusdbMysqlProxyV3ReadonlyNodesWeight[] ReadonlyNodesWeight { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>[]

readonly_nodes_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#readonly_nodes_weight TaurusdbMysqlProxyV3#readonly_nodes_weight}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.timeouts"></a>

```csharp
public TaurusdbMysqlProxyV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#timeouts TaurusdbMysqlProxyV3#timeouts}

---

### TaurusdbMysqlProxyV3MasterNodeWeight <a name="TaurusdbMysqlProxyV3MasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3MasterNodeWeight {
    string Id,
    double Weight
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}.

---

### TaurusdbMysqlProxyV3Nodes <a name="TaurusdbMysqlProxyV3Nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3Nodes {

};
```


### TaurusdbMysqlProxyV3ReadonlyNodesWeight <a name="TaurusdbMysqlProxyV3ReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3ReadonlyNodesWeight {
    string Id,
    double Weight
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}.

---

### TaurusdbMysqlProxyV3Timeouts <a name="TaurusdbMysqlProxyV3Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#create TaurusdbMysqlProxyV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#delete TaurusdbMysqlProxyV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#update TaurusdbMysqlProxyV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#create TaurusdbMysqlProxyV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#delete TaurusdbMysqlProxyV3#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/taurusdb_mysql_proxy_v3#update TaurusdbMysqlProxyV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TaurusdbMysqlProxyV3MasterNodeWeightOutputReference <a name="TaurusdbMysqlProxyV3MasterNodeWeightOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3MasterNodeWeightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.internalValue"></a>

```csharp
public TaurusdbMysqlProxyV3MasterNodeWeight InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

---


### TaurusdbMysqlProxyV3NodesList <a name="TaurusdbMysqlProxyV3NodesList" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3NodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.get"></a>

```csharp
private TaurusdbMysqlProxyV3NodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### TaurusdbMysqlProxyV3NodesOutputReference <a name="TaurusdbMysqlProxyV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3NodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.azCode">AzCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.frozenFlag">FrozenFlag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes">TaurusdbMysqlProxyV3Nodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzCode`<sup>Required</sup> <a name="AzCode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.azCode"></a>

```csharp
public string AzCode { get; }
```

- *Type:* string

---

##### `FrozenFlag`<sup>Required</sup> <a name="FrozenFlag" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.frozenFlag"></a>

```csharp
public double FrozenFlag { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.internalValue"></a>

```csharp
public TaurusdbMysqlProxyV3Nodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes">TaurusdbMysqlProxyV3Nodes</a>

---


### TaurusdbMysqlProxyV3ReadonlyNodesWeightList <a name="TaurusdbMysqlProxyV3ReadonlyNodesWeightList" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3ReadonlyNodesWeightList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.get"></a>

```csharp
private TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.internalValue"></a>

```csharp
public IResolvable|TaurusdbMysqlProxyV3ReadonlyNodesWeight[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>[]

---


### TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference <a name="TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TaurusdbMysqlProxyV3ReadonlyNodesWeight InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight">TaurusdbMysqlProxyV3ReadonlyNodesWeight</a>

---


### TaurusdbMysqlProxyV3TimeoutsOutputReference <a name="TaurusdbMysqlProxyV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new TaurusdbMysqlProxyV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TaurusdbMysqlProxyV3Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

---



