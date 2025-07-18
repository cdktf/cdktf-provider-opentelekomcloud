# `cfwAclRuleV1` Submodule <a name="`cfwAclRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwAclRuleV1 <a name="CfwAclRuleV1" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1 opentelekomcloud_cfw_acl_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1(Construct Scope, string Id, CfwAclRuleV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config">CfwAclRuleV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config">CfwAclRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence">PutSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService">PutService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplications">ResetApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplicationsJsonString">ResetApplicationsJsonString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTime">ResetLongConnectTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeHour">ResetLongConnectTimeHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeMinute">ResetLongConnectTimeMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeSecond">ResetLongConnectTimeSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination"></a>

```csharp
private void PutDestination(CfwAclRuleV1Destination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---

##### `PutSequence` <a name="PutSequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence"></a>

```csharp
private void PutSequence(CfwAclRuleV1Sequence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---

##### `PutService` <a name="PutService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService"></a>

```csharp
private void PutService(CfwAclRuleV1Service Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource"></a>

```csharp
private void PutSource(CfwAclRuleV1Source Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts"></a>

```csharp
private void PutTimeouts(CfwAclRuleV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

---

##### `ResetApplications` <a name="ResetApplications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplications"></a>

```csharp
private void ResetApplications()
```

##### `ResetApplicationsJsonString` <a name="ResetApplicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplicationsJsonString"></a>

```csharp
private void ResetApplicationsJsonString()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetLongConnectTime` <a name="ResetLongConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTime"></a>

```csharp
private void ResetLongConnectTime()
```

##### `ResetLongConnectTimeHour` <a name="ResetLongConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeHour"></a>

```csharp
private void ResetLongConnectTimeHour()
```

##### `ResetLongConnectTimeMinute` <a name="ResetLongConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeMinute"></a>

```csharp
private void ResetLongConnectTimeMinute()
```

##### `ResetLongConnectTimeSecond` <a name="ResetLongConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeSecond"></a>

```csharp
private void ResetLongConnectTimeSecond()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CfwAclRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CfwAclRuleV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CfwAclRuleV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CfwAclRuleV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CfwAclRuleV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CfwAclRuleV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfwAclRuleV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfwAclRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CfwAclRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference">CfwAclRuleV1DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lastOpenTime">LastOpenTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequence">Sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference">CfwAclRuleV1SequenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.service">Service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference">CfwAclRuleV1ServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.source">Source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference">CfwAclRuleV1SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference">CfwAclRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionTypeInput">ActionTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressTypeInput">AddressTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsInput">ApplicationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonStringInput">ApplicationsJsonStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.directionInput">DirectionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnableInput">LongConnectEnableInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHourInput">LongConnectTimeHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeInput">LongConnectTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinuteInput">LongConnectTimeMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecondInput">LongConnectTimeSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequenceInput">SequenceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.serviceInput">ServiceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.statusInput">StatusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionType">ActionType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressType">AddressType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applications">Applications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonString">ApplicationsJsonString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.direction">Direction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnable">LongConnectEnable</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTime">LongConnectTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHour">LongConnectTimeHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinute">LongConnectTimeMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecond">LongConnectTimeSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.type">Type</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destination"></a>

```csharp
public CfwAclRuleV1DestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference">CfwAclRuleV1DestinationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastOpenTime`<sup>Required</sup> <a name="LastOpenTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lastOpenTime"></a>

```csharp
public string LastOpenTime { get; }
```

- *Type:* string

---

##### `Sequence`<sup>Required</sup> <a name="Sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequence"></a>

```csharp
public CfwAclRuleV1SequenceOutputReference Sequence { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference">CfwAclRuleV1SequenceOutputReference</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.service"></a>

```csharp
public CfwAclRuleV1ServiceOutputReference Service { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference">CfwAclRuleV1ServiceOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.source"></a>

```csharp
public CfwAclRuleV1SourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference">CfwAclRuleV1SourceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeouts"></a>

```csharp
public CfwAclRuleV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference">CfwAclRuleV1TimeoutsOutputReference</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionTypeInput"></a>

```csharp
public double ActionTypeInput { get; }
```

- *Type:* double

---

##### `AddressTypeInput`<sup>Optional</sup> <a name="AddressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressTypeInput"></a>

```csharp
public double AddressTypeInput { get; }
```

- *Type:* double

---

##### `ApplicationsInput`<sup>Optional</sup> <a name="ApplicationsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsInput"></a>

```csharp
public string[] ApplicationsInput { get; }
```

- *Type:* string[]

---

##### `ApplicationsJsonStringInput`<sup>Optional</sup> <a name="ApplicationsJsonStringInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonStringInput"></a>

```csharp
public string ApplicationsJsonStringInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destinationInput"></a>

```csharp
public CfwAclRuleV1Destination DestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.directionInput"></a>

```csharp
public double DirectionInput { get; }
```

- *Type:* double

---

##### `LongConnectEnableInput`<sup>Optional</sup> <a name="LongConnectEnableInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnableInput"></a>

```csharp
public double LongConnectEnableInput { get; }
```

- *Type:* double

---

##### `LongConnectTimeHourInput`<sup>Optional</sup> <a name="LongConnectTimeHourInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHourInput"></a>

```csharp
public double LongConnectTimeHourInput { get; }
```

- *Type:* double

---

##### `LongConnectTimeInput`<sup>Optional</sup> <a name="LongConnectTimeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeInput"></a>

```csharp
public double LongConnectTimeInput { get; }
```

- *Type:* double

---

##### `LongConnectTimeMinuteInput`<sup>Optional</sup> <a name="LongConnectTimeMinuteInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinuteInput"></a>

```csharp
public double LongConnectTimeMinuteInput { get; }
```

- *Type:* double

---

##### `LongConnectTimeSecondInput`<sup>Optional</sup> <a name="LongConnectTimeSecondInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecondInput"></a>

```csharp
public double LongConnectTimeSecondInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `SequenceInput`<sup>Optional</sup> <a name="SequenceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequenceInput"></a>

```csharp
public CfwAclRuleV1Sequence SequenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.serviceInput"></a>

```csharp
public CfwAclRuleV1Service ServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sourceInput"></a>

```csharp
public CfwAclRuleV1Source SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.statusInput"></a>

```csharp
public double StatusInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionType"></a>

```csharp
public double ActionType { get; }
```

- *Type:* double

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressType"></a>

```csharp
public double AddressType { get; }
```

- *Type:* double

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applications"></a>

```csharp
public string[] Applications { get; }
```

- *Type:* string[]

---

##### `ApplicationsJsonString`<sup>Required</sup> <a name="ApplicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonString"></a>

```csharp
public string ApplicationsJsonString { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.direction"></a>

```csharp
public double Direction { get; }
```

- *Type:* double

---

##### `LongConnectEnable`<sup>Required</sup> <a name="LongConnectEnable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnable"></a>

```csharp
public double LongConnectEnable { get; }
```

- *Type:* double

---

##### `LongConnectTime`<sup>Required</sup> <a name="LongConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTime"></a>

```csharp
public double LongConnectTime { get; }
```

- *Type:* double

---

##### `LongConnectTimeHour`<sup>Required</sup> <a name="LongConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHour"></a>

```csharp
public double LongConnectTimeHour { get; }
```

- *Type:* double

---

##### `LongConnectTimeMinute`<sup>Required</sup> <a name="LongConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinute"></a>

```csharp
public double LongConnectTimeMinute { get; }
```

- *Type:* double

---

##### `LongConnectTimeSecond`<sup>Required</sup> <a name="LongConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecond"></a>

```csharp
public double LongConnectTimeSecond { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfwAclRuleV1Config <a name="CfwAclRuleV1Config" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double ActionType,
    double AddressType,
    CfwAclRuleV1Destination Destination,
    double LongConnectEnable,
    string Name,
    string ObjectId,
    CfwAclRuleV1Sequence Sequence,
    CfwAclRuleV1Service Service,
    CfwAclRuleV1Source Source,
    double Status,
    double Type,
    string[] Applications = null,
    string ApplicationsJsonString = null,
    string Description = null,
    double Direction = null,
    double LongConnectTime = null,
    double LongConnectTimeHour = null,
    double LongConnectTimeMinute = null,
    double LongConnectTimeSecond = null,
    CfwAclRuleV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.actionType">ActionType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.addressType">AddressType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectEnable">LongConnectEnable</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.sequence">Sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | sequence block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.service">Service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.source">Source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | source block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.status">Status</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applications">Applications</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applicationsJsonString">ApplicationsJsonString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.direction">Direction</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTime">LongConnectTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeHour">LongConnectTimeHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeMinute">LongConnectTimeMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeSecond">LongConnectTimeSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.actionType"></a>

```csharp
public double ActionType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}.

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.addressType"></a>

```csharp
public double AddressType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.destination"></a>

```csharp
public CfwAclRuleV1Destination Destination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#destination CfwAclRuleV1#destination}

---

##### `LongConnectEnable`<sup>Required</sup> <a name="LongConnectEnable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectEnable"></a>

```csharp
public double LongConnectEnable { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}.

---

##### `Sequence`<sup>Required</sup> <a name="Sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.sequence"></a>

```csharp
public CfwAclRuleV1Sequence Sequence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#sequence CfwAclRuleV1#sequence}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.service"></a>

```csharp
public CfwAclRuleV1Service Service { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service CfwAclRuleV1#service}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.source"></a>

```csharp
public CfwAclRuleV1Source Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source CfwAclRuleV1#source}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.status"></a>

```csharp
public double Status { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `Applications`<sup>Optional</sup> <a name="Applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applications"></a>

```csharp
public string[] Applications { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}.

---

##### `ApplicationsJsonString`<sup>Optional</sup> <a name="ApplicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applicationsJsonString"></a>

```csharp
public string ApplicationsJsonString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.direction"></a>

```csharp
public double Direction { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}.

---

##### `LongConnectTime`<sup>Optional</sup> <a name="LongConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTime"></a>

```csharp
public double LongConnectTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}.

---

##### `LongConnectTimeHour`<sup>Optional</sup> <a name="LongConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeHour"></a>

```csharp
public double LongConnectTimeHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}.

---

##### `LongConnectTimeMinute`<sup>Optional</sup> <a name="LongConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeMinute"></a>

```csharp
public double LongConnectTimeMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}.

---

##### `LongConnectTimeSecond`<sup>Optional</sup> <a name="LongConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeSecond"></a>

```csharp
public double LongConnectTimeSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.timeouts"></a>

```csharp
public CfwAclRuleV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#timeouts CfwAclRuleV1#timeouts}

---

### CfwAclRuleV1Destination <a name="CfwAclRuleV1Destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1Destination {
    double Type,
    string Address = null,
    string[] AddressGroup = null,
    string AddressSetId = null,
    string AddressSetName = null,
    double AddressSetType = null,
    double AddressType = null,
    string DomainAddressName = null,
    string DomainSetId = null,
    string DomainSetName = null,
    string[] IpAddress = null,
    string[] PredefinedGroup = null,
    object RegionList = null,
    string RegionListJson = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressGroup">AddressGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetId">AddressSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetName">AddressSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetType">AddressSetType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressType">AddressType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainAddressName">DomainAddressName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetId">DomainSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetName">DomainSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.ipAddress">IpAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.predefinedGroup">PredefinedGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionList">RegionList</a></code> | <code>object</code> | region_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionListJson">RegionListJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

##### `AddressGroup`<sup>Optional</sup> <a name="AddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressGroup"></a>

```csharp
public string[] AddressGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

##### `AddressSetId`<sup>Optional</sup> <a name="AddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetId"></a>

```csharp
public string AddressSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

##### `AddressSetName`<sup>Optional</sup> <a name="AddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetName"></a>

```csharp
public string AddressSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

##### `AddressSetType`<sup>Optional</sup> <a name="AddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetType"></a>

```csharp
public double AddressSetType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

##### `AddressType`<sup>Optional</sup> <a name="AddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressType"></a>

```csharp
public double AddressType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `DomainAddressName`<sup>Optional</sup> <a name="DomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainAddressName"></a>

```csharp
public string DomainAddressName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

##### `DomainSetId`<sup>Optional</sup> <a name="DomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetId"></a>

```csharp
public string DomainSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

##### `DomainSetName`<sup>Optional</sup> <a name="DomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetName"></a>

```csharp
public string DomainSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.ipAddress"></a>

```csharp
public string[] IpAddress { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

##### `PredefinedGroup`<sup>Optional</sup> <a name="PredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.predefinedGroup"></a>

```csharp
public string[] PredefinedGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `RegionList`<sup>Optional</sup> <a name="RegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionList"></a>

```csharp
public object RegionList { get; set; }
```

- *Type:* object

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

##### `RegionListJson`<sup>Optional</sup> <a name="RegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionListJson"></a>

```csharp
public string RegionListJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

### CfwAclRuleV1DestinationRegionListStruct <a name="CfwAclRuleV1DestinationRegionListStruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1DestinationRegionListStruct {
    string RegionId = null,
    double RegionType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionId">RegionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionType">RegionType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}. |

---

##### `RegionId`<sup>Optional</sup> <a name="RegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionId"></a>

```csharp
public string RegionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}.

---

##### `RegionType`<sup>Optional</sup> <a name="RegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionType"></a>

```csharp
public double RegionType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}.

---

### CfwAclRuleV1Sequence <a name="CfwAclRuleV1Sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1Sequence {
    double Bottom = null,
    string DestRuleId = null,
    double Top = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.bottom">Bottom</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.destRuleId">DestRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.top">Top</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}. |

---

##### `Bottom`<sup>Optional</sup> <a name="Bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.bottom"></a>

```csharp
public double Bottom { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}.

---

##### `DestRuleId`<sup>Optional</sup> <a name="DestRuleId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.destRuleId"></a>

```csharp
public string DestRuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}.

---

##### `Top`<sup>Optional</sup> <a name="Top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.top"></a>

```csharp
public double Top { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}.

---

### CfwAclRuleV1Service <a name="CfwAclRuleV1Service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1Service {
    double Type,
    object CustomService = null,
    string DestPort = null,
    string[] PredefinedGroup = null,
    double Protocol = null,
    double[] Protocols = null,
    string[] ServiceGroup = null,
    object ServiceGroupNames = null,
    string ServiceSetId = null,
    string ServiceSetName = null,
    double ServiceSetType = null,
    string SourcePort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.customService">CustomService</a></code> | <code>object</code> | custom_service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.destPort">DestPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.predefinedGroup">PredefinedGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocol">Protocol</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocols">Protocols</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroup">ServiceGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroupNames">ServiceGroupNames</a></code> | <code>object</code> | service_group_names block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetId">ServiceSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetName">ServiceSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetType">ServiceSetType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.sourcePort">SourcePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `CustomService`<sup>Optional</sup> <a name="CustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.customService"></a>

```csharp
public object CustomService { get; set; }
```

- *Type:* object

custom_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#custom_service CfwAclRuleV1#custom_service}

---

##### `DestPort`<sup>Optional</sup> <a name="DestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.destPort"></a>

```csharp
public string DestPort { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}.

---

##### `PredefinedGroup`<sup>Optional</sup> <a name="PredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.predefinedGroup"></a>

```csharp
public string[] PredefinedGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocol"></a>

```csharp
public double Protocol { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocols"></a>

```csharp
public double[] Protocols { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}.

---

##### `ServiceGroup`<sup>Optional</sup> <a name="ServiceGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroup"></a>

```csharp
public string[] ServiceGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}.

---

##### `ServiceGroupNames`<sup>Optional</sup> <a name="ServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroupNames"></a>

```csharp
public object ServiceGroupNames { get; set; }
```

- *Type:* object

service_group_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_group_names CfwAclRuleV1#service_group_names}

---

##### `ServiceSetId`<sup>Optional</sup> <a name="ServiceSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetId"></a>

```csharp
public string ServiceSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}.

---

##### `ServiceSetName`<sup>Optional</sup> <a name="ServiceSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetName"></a>

```csharp
public string ServiceSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}.

---

##### `ServiceSetType`<sup>Optional</sup> <a name="ServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetType"></a>

```csharp
public double ServiceSetType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}.

---

##### `SourcePort`<sup>Optional</sup> <a name="SourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.sourcePort"></a>

```csharp
public string SourcePort { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}.

---

### CfwAclRuleV1ServiceCustomService <a name="CfwAclRuleV1ServiceCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1ServiceCustomService {
    string Description = null,
    string DestPort = null,
    string Name = null,
    double Protocol = null,
    string SourcePort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.destPort">DestPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.protocol">Protocol</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.sourcePort">SourcePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `DestPort`<sup>Optional</sup> <a name="DestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.destPort"></a>

```csharp
public string DestPort { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.protocol"></a>

```csharp
public double Protocol { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}.

---

##### `SourcePort`<sup>Optional</sup> <a name="SourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.sourcePort"></a>

```csharp
public string SourcePort { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}.

---

### CfwAclRuleV1ServiceServiceGroupNames <a name="CfwAclRuleV1ServiceServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1ServiceServiceGroupNames {
    string Name = null,
    double[] Protocols = null,
    double ServiceSetType = null,
    string SetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.protocols">Protocols</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.serviceSetType">ServiceSetType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.setId">SetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#set_id CfwAclRuleV1#set_id}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.protocols"></a>

```csharp
public double[] Protocols { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}.

---

##### `ServiceSetType`<sup>Optional</sup> <a name="ServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.serviceSetType"></a>

```csharp
public double ServiceSetType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}.

---

##### `SetId`<sup>Optional</sup> <a name="SetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.setId"></a>

```csharp
public string SetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#set_id CfwAclRuleV1#set_id}.

---

### CfwAclRuleV1Source <a name="CfwAclRuleV1Source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1Source {
    double Type,
    string Address = null,
    string[] AddressGroup = null,
    string AddressSetId = null,
    string AddressSetName = null,
    double AddressSetType = null,
    double AddressType = null,
    string DomainAddressName = null,
    string DomainSetId = null,
    string DomainSetName = null,
    string[] IpAddress = null,
    string[] PredefinedGroup = null,
    object RegionList = null,
    string RegionListJson = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressGroup">AddressGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetId">AddressSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetName">AddressSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetType">AddressSetType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressType">AddressType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainAddressName">DomainAddressName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetId">DomainSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetName">DomainSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.ipAddress">IpAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.predefinedGroup">PredefinedGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionList">RegionList</a></code> | <code>object</code> | region_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionListJson">RegionListJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

##### `AddressGroup`<sup>Optional</sup> <a name="AddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressGroup"></a>

```csharp
public string[] AddressGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

##### `AddressSetId`<sup>Optional</sup> <a name="AddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetId"></a>

```csharp
public string AddressSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

##### `AddressSetName`<sup>Optional</sup> <a name="AddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetName"></a>

```csharp
public string AddressSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

##### `AddressSetType`<sup>Optional</sup> <a name="AddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetType"></a>

```csharp
public double AddressSetType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

##### `AddressType`<sup>Optional</sup> <a name="AddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressType"></a>

```csharp
public double AddressType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `DomainAddressName`<sup>Optional</sup> <a name="DomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainAddressName"></a>

```csharp
public string DomainAddressName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

##### `DomainSetId`<sup>Optional</sup> <a name="DomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetId"></a>

```csharp
public string DomainSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

##### `DomainSetName`<sup>Optional</sup> <a name="DomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetName"></a>

```csharp
public string DomainSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.ipAddress"></a>

```csharp
public string[] IpAddress { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

##### `PredefinedGroup`<sup>Optional</sup> <a name="PredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.predefinedGroup"></a>

```csharp
public string[] PredefinedGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `RegionList`<sup>Optional</sup> <a name="RegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionList"></a>

```csharp
public object RegionList { get; set; }
```

- *Type:* object

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

##### `RegionListJson`<sup>Optional</sup> <a name="RegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionListJson"></a>

```csharp
public string RegionListJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

### CfwAclRuleV1SourceRegionListStruct <a name="CfwAclRuleV1SourceRegionListStruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1SourceRegionListStruct {
    string RegionId = null,
    double RegionType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionId">RegionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionType">RegionType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}. |

---

##### `RegionId`<sup>Optional</sup> <a name="RegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionId"></a>

```csharp
public string RegionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}.

---

##### `RegionType`<sup>Optional</sup> <a name="RegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionType"></a>

```csharp
public double RegionType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}.

---

### CfwAclRuleV1Timeouts <a name="CfwAclRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwAclRuleV1DestinationOutputReference <a name="CfwAclRuleV1DestinationOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList">PutRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressGroup">ResetAddressGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetId">ResetAddressSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetName">ResetAddressSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetType">ResetAddressSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressType">ResetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainAddressName">ResetDomainAddressName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetId">ResetDomainSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetName">ResetDomainSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetPredefinedGroup">ResetPredefinedGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionList">ResetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionListJson">ResetRegionListJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRegionList` <a name="PutRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList"></a>

```csharp
private void PutRegionList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList.parameter.value"></a>

- *Type:* object

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetAddressGroup` <a name="ResetAddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressGroup"></a>

```csharp
private void ResetAddressGroup()
```

##### `ResetAddressSetId` <a name="ResetAddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetId"></a>

```csharp
private void ResetAddressSetId()
```

##### `ResetAddressSetName` <a name="ResetAddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetName"></a>

```csharp
private void ResetAddressSetName()
```

##### `ResetAddressSetType` <a name="ResetAddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetType"></a>

```csharp
private void ResetAddressSetType()
```

##### `ResetAddressType` <a name="ResetAddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressType"></a>

```csharp
private void ResetAddressType()
```

##### `ResetDomainAddressName` <a name="ResetDomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainAddressName"></a>

```csharp
private void ResetDomainAddressName()
```

##### `ResetDomainSetId` <a name="ResetDomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetId"></a>

```csharp
private void ResetDomainSetId()
```

##### `ResetDomainSetName` <a name="ResetDomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetName"></a>

```csharp
private void ResetDomainSetName()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetPredefinedGroup` <a name="ResetPredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetPredefinedGroup"></a>

```csharp
private void ResetPredefinedGroup()
```

##### `ResetRegionList` <a name="ResetRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionList"></a>

```csharp
private void ResetRegionList()
```

##### `ResetRegionListJson` <a name="ResetRegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionListJson"></a>

```csharp
private void ResetRegionListJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionList">RegionList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList">CfwAclRuleV1DestinationRegionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroupInput">AddressGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetIdInput">AddressSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetNameInput">AddressSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetTypeInput">AddressSetTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressTypeInput">AddressTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressNameInput">DomainAddressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetIdInput">DomainSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetNameInput">DomainSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroupInput">PredefinedGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListInput">RegionListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJsonInput">RegionListJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroup">AddressGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetId">AddressSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetName">AddressSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetType">AddressSetType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressType">AddressType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressName">DomainAddressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetId">DomainSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetName">DomainSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddress">IpAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroup">PredefinedGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJson">RegionListJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionList"></a>

```csharp
public CfwAclRuleV1DestinationRegionListStructList RegionList { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList">CfwAclRuleV1DestinationRegionListStructList</a>

---

##### `AddressGroupInput`<sup>Optional</sup> <a name="AddressGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroupInput"></a>

```csharp
public string[] AddressGroupInput { get; }
```

- *Type:* string[]

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `AddressSetIdInput`<sup>Optional</sup> <a name="AddressSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetIdInput"></a>

```csharp
public string AddressSetIdInput { get; }
```

- *Type:* string

---

##### `AddressSetNameInput`<sup>Optional</sup> <a name="AddressSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetNameInput"></a>

```csharp
public string AddressSetNameInput { get; }
```

- *Type:* string

---

##### `AddressSetTypeInput`<sup>Optional</sup> <a name="AddressSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetTypeInput"></a>

```csharp
public double AddressSetTypeInput { get; }
```

- *Type:* double

---

##### `AddressTypeInput`<sup>Optional</sup> <a name="AddressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressTypeInput"></a>

```csharp
public double AddressTypeInput { get; }
```

- *Type:* double

---

##### `DomainAddressNameInput`<sup>Optional</sup> <a name="DomainAddressNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressNameInput"></a>

```csharp
public string DomainAddressNameInput { get; }
```

- *Type:* string

---

##### `DomainSetIdInput`<sup>Optional</sup> <a name="DomainSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetIdInput"></a>

```csharp
public string DomainSetIdInput { get; }
```

- *Type:* string

---

##### `DomainSetNameInput`<sup>Optional</sup> <a name="DomainSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetNameInput"></a>

```csharp
public string DomainSetNameInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddressInput"></a>

```csharp
public string[] IpAddressInput { get; }
```

- *Type:* string[]

---

##### `PredefinedGroupInput`<sup>Optional</sup> <a name="PredefinedGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroupInput"></a>

```csharp
public string[] PredefinedGroupInput { get; }
```

- *Type:* string[]

---

##### `RegionListInput`<sup>Optional</sup> <a name="RegionListInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListInput"></a>

```csharp
public object RegionListInput { get; }
```

- *Type:* object

---

##### `RegionListJsonInput`<sup>Optional</sup> <a name="RegionListJsonInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJsonInput"></a>

```csharp
public string RegionListJsonInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AddressGroup`<sup>Required</sup> <a name="AddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroup"></a>

```csharp
public string[] AddressGroup { get; }
```

- *Type:* string[]

---

##### `AddressSetId`<sup>Required</sup> <a name="AddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetId"></a>

```csharp
public string AddressSetId { get; }
```

- *Type:* string

---

##### `AddressSetName`<sup>Required</sup> <a name="AddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetName"></a>

```csharp
public string AddressSetName { get; }
```

- *Type:* string

---

##### `AddressSetType`<sup>Required</sup> <a name="AddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetType"></a>

```csharp
public double AddressSetType { get; }
```

- *Type:* double

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressType"></a>

```csharp
public double AddressType { get; }
```

- *Type:* double

---

##### `DomainAddressName`<sup>Required</sup> <a name="DomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressName"></a>

```csharp
public string DomainAddressName { get; }
```

- *Type:* string

---

##### `DomainSetId`<sup>Required</sup> <a name="DomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetId"></a>

```csharp
public string DomainSetId { get; }
```

- *Type:* string

---

##### `DomainSetName`<sup>Required</sup> <a name="DomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetName"></a>

```csharp
public string DomainSetName { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddress"></a>

```csharp
public string[] IpAddress { get; }
```

- *Type:* string[]

---

##### `PredefinedGroup`<sup>Required</sup> <a name="PredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroup"></a>

```csharp
public string[] PredefinedGroup { get; }
```

- *Type:* string[]

---

##### `RegionListJson`<sup>Required</sup> <a name="RegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJson"></a>

```csharp
public string RegionListJson { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.internalValue"></a>

```csharp
public CfwAclRuleV1Destination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---


### CfwAclRuleV1DestinationRegionListStructList <a name="CfwAclRuleV1DestinationRegionListStructList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1DestinationRegionListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get"></a>

```csharp
private CfwAclRuleV1DestinationRegionListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CfwAclRuleV1DestinationRegionListStructOutputReference <a name="CfwAclRuleV1DestinationRegionListStructOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1DestinationRegionListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionId">ResetRegionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionType">ResetRegionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegionId` <a name="ResetRegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionId"></a>

```csharp
private void ResetRegionId()
```

##### `ResetRegionType` <a name="ResetRegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionType"></a>

```csharp
private void ResetRegionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionIdInput">RegionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionTypeInput">RegionTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionId">RegionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionType">RegionType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionIdInput`<sup>Optional</sup> <a name="RegionIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionIdInput"></a>

```csharp
public string RegionIdInput { get; }
```

- *Type:* string

---

##### `RegionTypeInput`<sup>Optional</sup> <a name="RegionTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionTypeInput"></a>

```csharp
public double RegionTypeInput { get; }
```

- *Type:* double

---

##### `RegionId`<sup>Required</sup> <a name="RegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionId"></a>

```csharp
public string RegionId { get; }
```

- *Type:* string

---

##### `RegionType`<sup>Required</sup> <a name="RegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionType"></a>

```csharp
public double RegionType { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CfwAclRuleV1SequenceOutputReference <a name="CfwAclRuleV1SequenceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1SequenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetBottom">ResetBottom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetDestRuleId">ResetDestRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetTop">ResetTop</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBottom` <a name="ResetBottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetBottom"></a>

```csharp
private void ResetBottom()
```

##### `ResetDestRuleId` <a name="ResetDestRuleId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetDestRuleId"></a>

```csharp
private void ResetDestRuleId()
```

##### `ResetTop` <a name="ResetTop" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetTop"></a>

```csharp
private void ResetTop()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottomInput">BottomInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleIdInput">DestRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.topInput">TopInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottom">Bottom</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleId">DestRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.top">Top</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BottomInput`<sup>Optional</sup> <a name="BottomInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottomInput"></a>

```csharp
public double BottomInput { get; }
```

- *Type:* double

---

##### `DestRuleIdInput`<sup>Optional</sup> <a name="DestRuleIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleIdInput"></a>

```csharp
public string DestRuleIdInput { get; }
```

- *Type:* string

---

##### `TopInput`<sup>Optional</sup> <a name="TopInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.topInput"></a>

```csharp
public double TopInput { get; }
```

- *Type:* double

---

##### `Bottom`<sup>Required</sup> <a name="Bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottom"></a>

```csharp
public double Bottom { get; }
```

- *Type:* double

---

##### `DestRuleId`<sup>Required</sup> <a name="DestRuleId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleId"></a>

```csharp
public string DestRuleId { get; }
```

- *Type:* string

---

##### `Top`<sup>Required</sup> <a name="Top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.top"></a>

```csharp
public double Top { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.internalValue"></a>

```csharp
public CfwAclRuleV1Sequence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---


### CfwAclRuleV1ServiceCustomServiceList <a name="CfwAclRuleV1ServiceCustomServiceList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1ServiceCustomServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get"></a>

```csharp
private CfwAclRuleV1ServiceCustomServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CfwAclRuleV1ServiceCustomServiceOutputReference <a name="CfwAclRuleV1ServiceCustomServiceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1ServiceCustomServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDestPort">ResetDestPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetSourcePort">ResetSourcePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestPort` <a name="ResetDestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDestPort"></a>

```csharp
private void ResetDestPort()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSourcePort` <a name="ResetSourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetSourcePort"></a>

```csharp
private void ResetSourcePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPortInput">DestPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePortInput">SourcePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPort">DestPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocol">Protocol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePort">SourcePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestPortInput`<sup>Optional</sup> <a name="DestPortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPortInput"></a>

```csharp
public string DestPortInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocolInput"></a>

```csharp
public double ProtocolInput { get; }
```

- *Type:* double

---

##### `SourcePortInput`<sup>Optional</sup> <a name="SourcePortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePortInput"></a>

```csharp
public string SourcePortInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestPort`<sup>Required</sup> <a name="DestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPort"></a>

```csharp
public string DestPort { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocol"></a>

```csharp
public double Protocol { get; }
```

- *Type:* double

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePort"></a>

```csharp
public string SourcePort { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CfwAclRuleV1ServiceOutputReference <a name="CfwAclRuleV1ServiceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1ServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService">PutCustomService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames">PutServiceGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetCustomService">ResetCustomService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetDestPort">ResetDestPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetPredefinedGroup">ResetPredefinedGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroup">ResetServiceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroupNames">ResetServiceGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetId">ResetServiceSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetName">ResetServiceSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetType">ResetServiceSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetSourcePort">ResetSourcePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomService` <a name="PutCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService"></a>

```csharp
private void PutCustomService(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService.parameter.value"></a>

- *Type:* object

---

##### `PutServiceGroupNames` <a name="PutServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames"></a>

```csharp
private void PutServiceGroupNames(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomService` <a name="ResetCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetCustomService"></a>

```csharp
private void ResetCustomService()
```

##### `ResetDestPort` <a name="ResetDestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetDestPort"></a>

```csharp
private void ResetDestPort()
```

##### `ResetPredefinedGroup` <a name="ResetPredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetPredefinedGroup"></a>

```csharp
private void ResetPredefinedGroup()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetServiceGroup` <a name="ResetServiceGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroup"></a>

```csharp
private void ResetServiceGroup()
```

##### `ResetServiceGroupNames` <a name="ResetServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroupNames"></a>

```csharp
private void ResetServiceGroupNames()
```

##### `ResetServiceSetId` <a name="ResetServiceSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetId"></a>

```csharp
private void ResetServiceSetId()
```

##### `ResetServiceSetName` <a name="ResetServiceSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetName"></a>

```csharp
private void ResetServiceSetName()
```

##### `ResetServiceSetType` <a name="ResetServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetType"></a>

```csharp
private void ResetServiceSetType()
```

##### `ResetSourcePort` <a name="ResetSourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetSourcePort"></a>

```csharp
private void ResetSourcePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customService">CustomService</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList">CfwAclRuleV1ServiceCustomServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNames">ServiceGroupNames</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList">CfwAclRuleV1ServiceServiceGroupNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customServiceInput">CustomServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPortInput">DestPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroupInput">PredefinedGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupInput">ServiceGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNamesInput">ServiceGroupNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetIdInput">ServiceSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetNameInput">ServiceSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetTypeInput">ServiceSetTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePortInput">SourcePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPort">DestPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroup">PredefinedGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocol">Protocol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocols">Protocols</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroup">ServiceGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetId">ServiceSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetName">ServiceSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetType">ServiceSetType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePort">SourcePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomService`<sup>Required</sup> <a name="CustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customService"></a>

```csharp
public CfwAclRuleV1ServiceCustomServiceList CustomService { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList">CfwAclRuleV1ServiceCustomServiceList</a>

---

##### `ServiceGroupNames`<sup>Required</sup> <a name="ServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNames"></a>

```csharp
public CfwAclRuleV1ServiceServiceGroupNamesList ServiceGroupNames { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList">CfwAclRuleV1ServiceServiceGroupNamesList</a>

---

##### `CustomServiceInput`<sup>Optional</sup> <a name="CustomServiceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customServiceInput"></a>

```csharp
public object CustomServiceInput { get; }
```

- *Type:* object

---

##### `DestPortInput`<sup>Optional</sup> <a name="DestPortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPortInput"></a>

```csharp
public string DestPortInput { get; }
```

- *Type:* string

---

##### `PredefinedGroupInput`<sup>Optional</sup> <a name="PredefinedGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroupInput"></a>

```csharp
public string[] PredefinedGroupInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolInput"></a>

```csharp
public double ProtocolInput { get; }
```

- *Type:* double

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolsInput"></a>

```csharp
public double[] ProtocolsInput { get; }
```

- *Type:* double[]

---

##### `ServiceGroupInput`<sup>Optional</sup> <a name="ServiceGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupInput"></a>

```csharp
public string[] ServiceGroupInput { get; }
```

- *Type:* string[]

---

##### `ServiceGroupNamesInput`<sup>Optional</sup> <a name="ServiceGroupNamesInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNamesInput"></a>

```csharp
public object ServiceGroupNamesInput { get; }
```

- *Type:* object

---

##### `ServiceSetIdInput`<sup>Optional</sup> <a name="ServiceSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetIdInput"></a>

```csharp
public string ServiceSetIdInput { get; }
```

- *Type:* string

---

##### `ServiceSetNameInput`<sup>Optional</sup> <a name="ServiceSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetNameInput"></a>

```csharp
public string ServiceSetNameInput { get; }
```

- *Type:* string

---

##### `ServiceSetTypeInput`<sup>Optional</sup> <a name="ServiceSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetTypeInput"></a>

```csharp
public double ServiceSetTypeInput { get; }
```

- *Type:* double

---

##### `SourcePortInput`<sup>Optional</sup> <a name="SourcePortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePortInput"></a>

```csharp
public string SourcePortInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `DestPort`<sup>Required</sup> <a name="DestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPort"></a>

```csharp
public string DestPort { get; }
```

- *Type:* string

---

##### `PredefinedGroup`<sup>Required</sup> <a name="PredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroup"></a>

```csharp
public string[] PredefinedGroup { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocol"></a>

```csharp
public double Protocol { get; }
```

- *Type:* double

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocols"></a>

```csharp
public double[] Protocols { get; }
```

- *Type:* double[]

---

##### `ServiceGroup`<sup>Required</sup> <a name="ServiceGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroup"></a>

```csharp
public string[] ServiceGroup { get; }
```

- *Type:* string[]

---

##### `ServiceSetId`<sup>Required</sup> <a name="ServiceSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetId"></a>

```csharp
public string ServiceSetId { get; }
```

- *Type:* string

---

##### `ServiceSetName`<sup>Required</sup> <a name="ServiceSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetName"></a>

```csharp
public string ServiceSetName { get; }
```

- *Type:* string

---

##### `ServiceSetType`<sup>Required</sup> <a name="ServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetType"></a>

```csharp
public double ServiceSetType { get; }
```

- *Type:* double

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePort"></a>

```csharp
public string SourcePort { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.internalValue"></a>

```csharp
public CfwAclRuleV1Service InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---


### CfwAclRuleV1ServiceServiceGroupNamesList <a name="CfwAclRuleV1ServiceServiceGroupNamesList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1ServiceServiceGroupNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get"></a>

```csharp
private CfwAclRuleV1ServiceServiceGroupNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CfwAclRuleV1ServiceServiceGroupNamesOutputReference <a name="CfwAclRuleV1ServiceServiceGroupNamesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1ServiceServiceGroupNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetServiceSetType">ResetServiceSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetSetId">ResetSetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetServiceSetType` <a name="ResetServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetServiceSetType"></a>

```csharp
private void ResetServiceSetType()
```

##### `ResetSetId` <a name="ResetSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetSetId"></a>

```csharp
private void ResetSetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetTypeInput">ServiceSetTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setIdInput">SetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocols">Protocols</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetType">ServiceSetType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setId">SetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocolsInput"></a>

```csharp
public double[] ProtocolsInput { get; }
```

- *Type:* double[]

---

##### `ServiceSetTypeInput`<sup>Optional</sup> <a name="ServiceSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetTypeInput"></a>

```csharp
public double ServiceSetTypeInput { get; }
```

- *Type:* double

---

##### `SetIdInput`<sup>Optional</sup> <a name="SetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setIdInput"></a>

```csharp
public string SetIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocols"></a>

```csharp
public double[] Protocols { get; }
```

- *Type:* double[]

---

##### `ServiceSetType`<sup>Required</sup> <a name="ServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetType"></a>

```csharp
public double ServiceSetType { get; }
```

- *Type:* double

---

##### `SetId`<sup>Required</sup> <a name="SetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setId"></a>

```csharp
public string SetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CfwAclRuleV1SourceOutputReference <a name="CfwAclRuleV1SourceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1SourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList">PutRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressGroup">ResetAddressGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetId">ResetAddressSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetName">ResetAddressSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetType">ResetAddressSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressType">ResetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainAddressName">ResetDomainAddressName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetId">ResetDomainSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetName">ResetDomainSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetPredefinedGroup">ResetPredefinedGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionList">ResetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionListJson">ResetRegionListJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRegionList` <a name="PutRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList"></a>

```csharp
private void PutRegionList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList.parameter.value"></a>

- *Type:* object

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetAddressGroup` <a name="ResetAddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressGroup"></a>

```csharp
private void ResetAddressGroup()
```

##### `ResetAddressSetId` <a name="ResetAddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetId"></a>

```csharp
private void ResetAddressSetId()
```

##### `ResetAddressSetName` <a name="ResetAddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetName"></a>

```csharp
private void ResetAddressSetName()
```

##### `ResetAddressSetType` <a name="ResetAddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetType"></a>

```csharp
private void ResetAddressSetType()
```

##### `ResetAddressType` <a name="ResetAddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressType"></a>

```csharp
private void ResetAddressType()
```

##### `ResetDomainAddressName` <a name="ResetDomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainAddressName"></a>

```csharp
private void ResetDomainAddressName()
```

##### `ResetDomainSetId` <a name="ResetDomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetId"></a>

```csharp
private void ResetDomainSetId()
```

##### `ResetDomainSetName` <a name="ResetDomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetName"></a>

```csharp
private void ResetDomainSetName()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetPredefinedGroup` <a name="ResetPredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetPredefinedGroup"></a>

```csharp
private void ResetPredefinedGroup()
```

##### `ResetRegionList` <a name="ResetRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionList"></a>

```csharp
private void ResetRegionList()
```

##### `ResetRegionListJson` <a name="ResetRegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionListJson"></a>

```csharp
private void ResetRegionListJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionList">RegionList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList">CfwAclRuleV1SourceRegionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroupInput">AddressGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetIdInput">AddressSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetNameInput">AddressSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetTypeInput">AddressSetTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressTypeInput">AddressTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressNameInput">DomainAddressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetIdInput">DomainSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetNameInput">DomainSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroupInput">PredefinedGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListInput">RegionListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJsonInput">RegionListJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroup">AddressGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetId">AddressSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetName">AddressSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetType">AddressSetType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressType">AddressType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressName">DomainAddressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetId">DomainSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetName">DomainSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddress">IpAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroup">PredefinedGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJson">RegionListJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionList"></a>

```csharp
public CfwAclRuleV1SourceRegionListStructList RegionList { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList">CfwAclRuleV1SourceRegionListStructList</a>

---

##### `AddressGroupInput`<sup>Optional</sup> <a name="AddressGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroupInput"></a>

```csharp
public string[] AddressGroupInput { get; }
```

- *Type:* string[]

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `AddressSetIdInput`<sup>Optional</sup> <a name="AddressSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetIdInput"></a>

```csharp
public string AddressSetIdInput { get; }
```

- *Type:* string

---

##### `AddressSetNameInput`<sup>Optional</sup> <a name="AddressSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetNameInput"></a>

```csharp
public string AddressSetNameInput { get; }
```

- *Type:* string

---

##### `AddressSetTypeInput`<sup>Optional</sup> <a name="AddressSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetTypeInput"></a>

```csharp
public double AddressSetTypeInput { get; }
```

- *Type:* double

---

##### `AddressTypeInput`<sup>Optional</sup> <a name="AddressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressTypeInput"></a>

```csharp
public double AddressTypeInput { get; }
```

- *Type:* double

---

##### `DomainAddressNameInput`<sup>Optional</sup> <a name="DomainAddressNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressNameInput"></a>

```csharp
public string DomainAddressNameInput { get; }
```

- *Type:* string

---

##### `DomainSetIdInput`<sup>Optional</sup> <a name="DomainSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetIdInput"></a>

```csharp
public string DomainSetIdInput { get; }
```

- *Type:* string

---

##### `DomainSetNameInput`<sup>Optional</sup> <a name="DomainSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetNameInput"></a>

```csharp
public string DomainSetNameInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddressInput"></a>

```csharp
public string[] IpAddressInput { get; }
```

- *Type:* string[]

---

##### `PredefinedGroupInput`<sup>Optional</sup> <a name="PredefinedGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroupInput"></a>

```csharp
public string[] PredefinedGroupInput { get; }
```

- *Type:* string[]

---

##### `RegionListInput`<sup>Optional</sup> <a name="RegionListInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListInput"></a>

```csharp
public object RegionListInput { get; }
```

- *Type:* object

---

##### `RegionListJsonInput`<sup>Optional</sup> <a name="RegionListJsonInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJsonInput"></a>

```csharp
public string RegionListJsonInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AddressGroup`<sup>Required</sup> <a name="AddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroup"></a>

```csharp
public string[] AddressGroup { get; }
```

- *Type:* string[]

---

##### `AddressSetId`<sup>Required</sup> <a name="AddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetId"></a>

```csharp
public string AddressSetId { get; }
```

- *Type:* string

---

##### `AddressSetName`<sup>Required</sup> <a name="AddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetName"></a>

```csharp
public string AddressSetName { get; }
```

- *Type:* string

---

##### `AddressSetType`<sup>Required</sup> <a name="AddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetType"></a>

```csharp
public double AddressSetType { get; }
```

- *Type:* double

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressType"></a>

```csharp
public double AddressType { get; }
```

- *Type:* double

---

##### `DomainAddressName`<sup>Required</sup> <a name="DomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressName"></a>

```csharp
public string DomainAddressName { get; }
```

- *Type:* string

---

##### `DomainSetId`<sup>Required</sup> <a name="DomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetId"></a>

```csharp
public string DomainSetId { get; }
```

- *Type:* string

---

##### `DomainSetName`<sup>Required</sup> <a name="DomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetName"></a>

```csharp
public string DomainSetName { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddress"></a>

```csharp
public string[] IpAddress { get; }
```

- *Type:* string[]

---

##### `PredefinedGroup`<sup>Required</sup> <a name="PredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroup"></a>

```csharp
public string[] PredefinedGroup { get; }
```

- *Type:* string[]

---

##### `RegionListJson`<sup>Required</sup> <a name="RegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJson"></a>

```csharp
public string RegionListJson { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.internalValue"></a>

```csharp
public CfwAclRuleV1Source InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---


### CfwAclRuleV1SourceRegionListStructList <a name="CfwAclRuleV1SourceRegionListStructList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1SourceRegionListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get"></a>

```csharp
private CfwAclRuleV1SourceRegionListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CfwAclRuleV1SourceRegionListStructOutputReference <a name="CfwAclRuleV1SourceRegionListStructOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1SourceRegionListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionId">ResetRegionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionType">ResetRegionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegionId` <a name="ResetRegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionId"></a>

```csharp
private void ResetRegionId()
```

##### `ResetRegionType` <a name="ResetRegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionType"></a>

```csharp
private void ResetRegionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionIdInput">RegionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionTypeInput">RegionTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionId">RegionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionType">RegionType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionIdInput`<sup>Optional</sup> <a name="RegionIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionIdInput"></a>

```csharp
public string RegionIdInput { get; }
```

- *Type:* string

---

##### `RegionTypeInput`<sup>Optional</sup> <a name="RegionTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionTypeInput"></a>

```csharp
public double RegionTypeInput { get; }
```

- *Type:* double

---

##### `RegionId`<sup>Required</sup> <a name="RegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionId"></a>

```csharp
public string RegionId { get; }
```

- *Type:* string

---

##### `RegionType`<sup>Required</sup> <a name="RegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionType"></a>

```csharp
public double RegionType { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CfwAclRuleV1TimeoutsOutputReference <a name="CfwAclRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CfwAclRuleV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



