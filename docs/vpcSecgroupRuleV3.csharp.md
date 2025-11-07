# `vpcSecgroupRuleV3` Submodule <a name="`vpcSecgroupRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecgroupRuleV3 <a name="VpcSecgroupRuleV3" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3 opentelekomcloud_vpc_secgroup_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpcSecgroupRuleV3(Construct Scope, string Id, VpcSecgroupRuleV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config">VpcSecgroupRuleV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config">VpcSecgroupRuleV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetEtherType">ResetEtherType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetMultiPort">ResetMultiPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetRemoteGroupId">ResetRemoteGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetRemoteIpPrefix">ResetRemoteIpPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.putTimeouts"></a>

```csharp
private void PutTimeouts(VpcSecgroupRuleV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEtherType` <a name="ResetEtherType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetEtherType"></a>

```csharp
private void ResetEtherType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMultiPort` <a name="ResetMultiPort" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetMultiPort"></a>

```csharp
private void ResetMultiPort()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRemoteGroupId` <a name="ResetRemoteGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetRemoteGroupId"></a>

```csharp
private void ResetRemoteGroupId()
```

##### `ResetRemoteIpPrefix` <a name="ResetRemoteIpPrefix" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetRemoteIpPrefix"></a>

```csharp
private void ResetRemoteIpPrefix()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcSecgroupRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpcSecgroupRuleV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpcSecgroupRuleV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpcSecgroupRuleV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpcSecgroupRuleV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpcSecgroupRuleV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcSecgroupRuleV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcSecgroupRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpcSecgroupRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteAddressGroupId">RemoteAddressGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference">VpcSecgroupRuleV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.etherTypeInput">EtherTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.multiPortInput">MultiPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteGroupIdInput">RemoteGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteIpPrefixInput">RemoteIpPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.etherType">EtherType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.multiPort">MultiPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteGroupId">RemoteGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteIpPrefix">RemoteIpPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RemoteAddressGroupId`<sup>Required</sup> <a name="RemoteAddressGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteAddressGroupId"></a>

```csharp
public string RemoteAddressGroupId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.timeouts"></a>

```csharp
public VpcSecgroupRuleV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference">VpcSecgroupRuleV3TimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `EtherTypeInput`<sup>Optional</sup> <a name="EtherTypeInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.etherTypeInput"></a>

```csharp
public string EtherTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MultiPortInput`<sup>Optional</sup> <a name="MultiPortInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.multiPortInput"></a>

```csharp
public string MultiPortInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RemoteGroupIdInput`<sup>Optional</sup> <a name="RemoteGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteGroupIdInput"></a>

```csharp
public string RemoteGroupIdInput { get; }
```

- *Type:* string

---

##### `RemoteIpPrefixInput`<sup>Optional</sup> <a name="RemoteIpPrefixInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteIpPrefixInput"></a>

```csharp
public string RemoteIpPrefixInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.timeoutsInput"></a>

```csharp
public IResolvable|VpcSecgroupRuleV3Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `EtherType`<sup>Required</sup> <a name="EtherType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.etherType"></a>

```csharp
public string EtherType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiPort`<sup>Required</sup> <a name="MultiPort" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.multiPort"></a>

```csharp
public string MultiPort { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RemoteGroupId`<sup>Required</sup> <a name="RemoteGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteGroupId"></a>

```csharp
public string RemoteGroupId { get; }
```

- *Type:* string

---

##### `RemoteIpPrefix`<sup>Required</sup> <a name="RemoteIpPrefix" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.remoteIpPrefix"></a>

```csharp
public string RemoteIpPrefix { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecgroupRuleV3Config <a name="VpcSecgroupRuleV3Config" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpcSecgroupRuleV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Direction,
    string SecurityGroupId,
    string Action = null,
    string Description = null,
    string EtherType = null,
    string Id = null,
    string MultiPort = null,
    double Priority = null,
    string Protocol = null,
    string RemoteGroupId = null,
    string RemoteIpPrefix = null,
    VpcSecgroupRuleV3Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#direction VpcSecgroupRuleV3#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#security_group_id VpcSecgroupRuleV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#action VpcSecgroupRuleV3#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#description VpcSecgroupRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.etherType">EtherType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#ether_type VpcSecgroupRuleV3#ether_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#id VpcSecgroupRuleV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.multiPort">MultiPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#multi_port VpcSecgroupRuleV3#multi_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#priority VpcSecgroupRuleV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#protocol VpcSecgroupRuleV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.remoteGroupId">RemoteGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#remote_group_id VpcSecgroupRuleV3#remote_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.remoteIpPrefix">RemoteIpPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#remote_ip_prefix VpcSecgroupRuleV3#remote_ip_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#direction VpcSecgroupRuleV3#direction}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#security_group_id VpcSecgroupRuleV3#security_group_id}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#action VpcSecgroupRuleV3#action}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#description VpcSecgroupRuleV3#description}.

---

##### `EtherType`<sup>Optional</sup> <a name="EtherType" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.etherType"></a>

```csharp
public string EtherType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#ether_type VpcSecgroupRuleV3#ether_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#id VpcSecgroupRuleV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MultiPort`<sup>Optional</sup> <a name="MultiPort" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.multiPort"></a>

```csharp
public string MultiPort { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#multi_port VpcSecgroupRuleV3#multi_port}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#priority VpcSecgroupRuleV3#priority}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#protocol VpcSecgroupRuleV3#protocol}.

---

##### `RemoteGroupId`<sup>Optional</sup> <a name="RemoteGroupId" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.remoteGroupId"></a>

```csharp
public string RemoteGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#remote_group_id VpcSecgroupRuleV3#remote_group_id}.

---

##### `RemoteIpPrefix`<sup>Optional</sup> <a name="RemoteIpPrefix" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.remoteIpPrefix"></a>

```csharp
public string RemoteIpPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#remote_ip_prefix VpcSecgroupRuleV3#remote_ip_prefix}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Config.property.timeouts"></a>

```csharp
public VpcSecgroupRuleV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#timeouts VpcSecgroupRuleV3#timeouts}

---

### VpcSecgroupRuleV3Timeouts <a name="VpcSecgroupRuleV3Timeouts" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpcSecgroupRuleV3Timeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#delete VpcSecgroupRuleV3#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/vpc_secgroup_rule_v3#delete VpcSecgroupRuleV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcSecgroupRuleV3TimeoutsOutputReference <a name="VpcSecgroupRuleV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpcSecgroupRuleV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpcSecgroupRuleV3Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.vpcSecgroupRuleV3.VpcSecgroupRuleV3Timeouts">VpcSecgroupRuleV3Timeouts</a>

---



