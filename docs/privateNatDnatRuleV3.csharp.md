# `privateNatDnatRuleV3` Submodule <a name="`privateNatDnatRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNatDnatRuleV3 <a name="PrivateNatDnatRuleV3" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3 opentelekomcloud_private_nat_dnat_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new PrivateNatDnatRuleV3(Construct Scope, string Id, PrivateNatDnatRuleV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config">PrivateNatDnatRuleV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config">PrivateNatDnatRuleV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetInternalServicePort">ResetInternalServicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTransitServicePort">ResetTransitServicePort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivateNatDnatRuleV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInternalServicePort` <a name="ResetInternalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetInternalServicePort"></a>

```csharp
private void ResetInternalServicePort()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransitServicePort` <a name="ResetTransitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTransitServicePort"></a>

```csharp
private void ResetTransitServicePort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateNatDnatRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

PrivateNatDnatRuleV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

PrivateNatDnatRuleV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

PrivateNatDnatRuleV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

PrivateNatDnatRuleV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivateNatDnatRuleV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateNatDnatRuleV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateNatDnatRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivateNatDnatRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference">PrivateNatDnatRuleV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePortInput">InternalServicePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpIdInput">TransitIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePortInput">TransitServicePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePort">InternalServicePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpId">TransitIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePort">TransitServicePort</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeouts"></a>

```csharp
public PrivateNatDnatRuleV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference">PrivateNatDnatRuleV3TimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `InternalServicePortInput`<sup>Optional</sup> <a name="InternalServicePortInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePortInput"></a>

```csharp
public string InternalServicePortInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeoutsInput"></a>

```csharp
public IResolvable|PrivateNatDnatRuleV3Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

---

##### `TransitIpIdInput`<sup>Optional</sup> <a name="TransitIpIdInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpIdInput"></a>

```csharp
public string TransitIpIdInput { get; }
```

- *Type:* string

---

##### `TransitServicePortInput`<sup>Optional</sup> <a name="TransitServicePortInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePortInput"></a>

```csharp
public string TransitServicePortInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `InternalServicePort`<sup>Required</sup> <a name="InternalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePort"></a>

```csharp
public string InternalServicePort { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `TransitIpId`<sup>Required</sup> <a name="TransitIpId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpId"></a>

```csharp
public string TransitIpId { get; }
```

- *Type:* string

---

##### `TransitServicePort`<sup>Required</sup> <a name="TransitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePort"></a>

```csharp
public string TransitServicePort { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNatDnatRuleV3Config <a name="PrivateNatDnatRuleV3Config" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new PrivateNatDnatRuleV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GatewayId,
    string TransitIpId,
    string Description = null,
    string InternalServicePort = null,
    string NetworkInterfaceId = null,
    string PrivateIpAddress = null,
    string Protocol = null,
    PrivateNatDnatRuleV3Timeouts Timeouts = null,
    string TransitServicePort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#gateway_id PrivateNatDnatRuleV3#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitIpId">TransitIpId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#transit_ip_id PrivateNatDnatRuleV3#transit_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#description PrivateNatDnatRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.internalServicePort">InternalServicePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#internal_service_port PrivateNatDnatRuleV3#internal_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#network_interface_id PrivateNatDnatRuleV3#network_interface_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#private_ip_address PrivateNatDnatRuleV3#private_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#protocol PrivateNatDnatRuleV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitServicePort">TransitServicePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#transit_service_port PrivateNatDnatRuleV3#transit_service_port}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#gateway_id PrivateNatDnatRuleV3#gateway_id}.

---

##### `TransitIpId`<sup>Required</sup> <a name="TransitIpId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitIpId"></a>

```csharp
public string TransitIpId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#transit_ip_id PrivateNatDnatRuleV3#transit_ip_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#description PrivateNatDnatRuleV3#description}.

---

##### `InternalServicePort`<sup>Optional</sup> <a name="InternalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.internalServicePort"></a>

```csharp
public string InternalServicePort { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#internal_service_port PrivateNatDnatRuleV3#internal_service_port}.

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#network_interface_id PrivateNatDnatRuleV3#network_interface_id}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#private_ip_address PrivateNatDnatRuleV3#private_ip_address}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#protocol PrivateNatDnatRuleV3#protocol}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.timeouts"></a>

```csharp
public PrivateNatDnatRuleV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#timeouts PrivateNatDnatRuleV3#timeouts}

---

##### `TransitServicePort`<sup>Optional</sup> <a name="TransitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitServicePort"></a>

```csharp
public string TransitServicePort { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#transit_service_port PrivateNatDnatRuleV3#transit_service_port}.

---

### PrivateNatDnatRuleV3Timeouts <a name="PrivateNatDnatRuleV3Timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new PrivateNatDnatRuleV3Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#create PrivateNatDnatRuleV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#delete PrivateNatDnatRuleV3#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#create PrivateNatDnatRuleV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/private_nat_dnat_rule_v3#delete PrivateNatDnatRuleV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateNatDnatRuleV3TimeoutsOutputReference <a name="PrivateNatDnatRuleV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new PrivateNatDnatRuleV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrivateNatDnatRuleV3Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

---



