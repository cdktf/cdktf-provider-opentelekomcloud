# `networkingSubnetV2` Submodule <a name="`networkingSubnetV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingSubnetV2 <a name="NetworkingSubnetV2" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2 opentelekomcloud_networking_subnet_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2(Construct Scope, string Id, NetworkingSubnetV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config">NetworkingSubnetV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config">NetworkingSubnetV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putAllocationPools">PutAllocationPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putHostRoutes">PutHostRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetAllocationPools">ResetAllocationPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetDnsNameservers">ResetDnsNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetEnableDhcp">ResetEnableDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetGatewayIp">ResetGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetHostRoutes">ResetHostRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetNoGateway">ResetNoGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetValueSpecs">ResetValueSpecs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAllocationPools` <a name="PutAllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putAllocationPools"></a>

```csharp
private void PutAllocationPools(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putAllocationPools.parameter.value"></a>

- *Type:* object

---

##### `PutHostRoutes` <a name="PutHostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putHostRoutes"></a>

```csharp
private void PutHostRoutes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putHostRoutes.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkingSubnetV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

---

##### `ResetAllocationPools` <a name="ResetAllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetAllocationPools"></a>

```csharp
private void ResetAllocationPools()
```

##### `ResetDnsNameservers` <a name="ResetDnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetDnsNameservers"></a>

```csharp
private void ResetDnsNameservers()
```

##### `ResetEnableDhcp` <a name="ResetEnableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetEnableDhcp"></a>

```csharp
private void ResetEnableDhcp()
```

##### `ResetGatewayIp` <a name="ResetGatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetGatewayIp"></a>

```csharp
private void ResetGatewayIp()
```

##### `ResetHostRoutes` <a name="ResetHostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetHostRoutes"></a>

```csharp
private void ResetHostRoutes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetIpVersion"></a>

```csharp
private void ResetIpVersion()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNoGateway` <a name="ResetNoGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetNoGateway"></a>

```csharp
private void ResetNoGateway()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValueSpecs` <a name="ResetValueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.resetValueSpecs"></a>

```csharp
private void ResetValueSpecs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkingSubnetV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

NetworkingSubnetV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

NetworkingSubnetV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

NetworkingSubnetV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

NetworkingSubnetV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkingSubnetV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkingSubnetV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkingSubnetV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingSubnetV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPools">AllocationPools</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList">NetworkingSubnetV2AllocationPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutes">HostRoutes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList">NetworkingSubnetV2HostRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference">NetworkingSubnetV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPoolsInput">AllocationPoolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameserversInput">DnsNameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcpInput">EnableDhcpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIpInput">GatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutesInput">HostRoutesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersionInput">IpVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkIdInput">NetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGatewayInput">NoGatewayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecsInput">ValueSpecsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameservers">DnsNameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcp">EnableDhcp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIp">GatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersion">IpVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGateway">NoGateway</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllocationPools`<sup>Required</sup> <a name="AllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPools"></a>

```csharp
public NetworkingSubnetV2AllocationPoolsList AllocationPools { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList">NetworkingSubnetV2AllocationPoolsList</a>

---

##### `HostRoutes`<sup>Required</sup> <a name="HostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutes"></a>

```csharp
public NetworkingSubnetV2HostRoutesList HostRoutes { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList">NetworkingSubnetV2HostRoutesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeouts"></a>

```csharp
public NetworkingSubnetV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference">NetworkingSubnetV2TimeoutsOutputReference</a>

---

##### `AllocationPoolsInput`<sup>Optional</sup> <a name="AllocationPoolsInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.allocationPoolsInput"></a>

```csharp
public object AllocationPoolsInput { get; }
```

- *Type:* object

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `DnsNameserversInput`<sup>Optional</sup> <a name="DnsNameserversInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameserversInput"></a>

```csharp
public string[] DnsNameserversInput { get; }
```

- *Type:* string[]

---

##### `EnableDhcpInput`<sup>Optional</sup> <a name="EnableDhcpInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcpInput"></a>

```csharp
public object EnableDhcpInput { get; }
```

- *Type:* object

---

##### `GatewayIpInput`<sup>Optional</sup> <a name="GatewayIpInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIpInput"></a>

```csharp
public string GatewayIpInput { get; }
```

- *Type:* string

---

##### `HostRoutesInput`<sup>Optional</sup> <a name="HostRoutesInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.hostRoutesInput"></a>

```csharp
public object HostRoutesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersionInput"></a>

```csharp
public double IpVersionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkIdInput"></a>

```csharp
public string NetworkIdInput { get; }
```

- *Type:* string

---

##### `NoGatewayInput`<sup>Optional</sup> <a name="NoGatewayInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGatewayInput"></a>

```csharp
public object NoGatewayInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValueSpecsInput`<sup>Optional</sup> <a name="ValueSpecsInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `DnsNameservers`<sup>Required</sup> <a name="DnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.dnsNameservers"></a>

```csharp
public string[] DnsNameservers { get; }
```

- *Type:* string[]

---

##### `EnableDhcp`<sup>Required</sup> <a name="EnableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.enableDhcp"></a>

```csharp
public object EnableDhcp { get; }
```

- *Type:* object

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.gatewayIp"></a>

```csharp
public string GatewayIp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.ipVersion"></a>

```csharp
public double IpVersion { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `NoGateway`<sup>Required</sup> <a name="NoGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.noGateway"></a>

```csharp
public object NoGateway { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `ValueSpecs`<sup>Required</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingSubnetV2AllocationPools <a name="NetworkingSubnetV2AllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2AllocationPools {
    string End,
    string Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.end">End</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#end NetworkingSubnetV2#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#start NetworkingSubnetV2#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#end NetworkingSubnetV2#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPools.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#start NetworkingSubnetV2#start}.

---

### NetworkingSubnetV2Config <a name="NetworkingSubnetV2Config" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Cidr,
    string NetworkId,
    object AllocationPools = null,
    string[] DnsNameservers = null,
    object EnableDhcp = null,
    string GatewayIp = null,
    object HostRoutes = null,
    string Id = null,
    double IpVersion = null,
    string Name = null,
    object NoGateway = null,
    string Region = null,
    string TenantId = null,
    NetworkingSubnetV2Timeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> ValueSpecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#cidr NetworkingSubnetV2#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.networkId">NetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#network_id NetworkingSubnetV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.allocationPools">AllocationPools</a></code> | <code>object</code> | allocation_pools block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dnsNameservers">DnsNameservers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#dns_nameservers NetworkingSubnetV2#dns_nameservers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.enableDhcp">EnableDhcp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#enable_dhcp NetworkingSubnetV2#enable_dhcp}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.gatewayIp">GatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#gateway_ip NetworkingSubnetV2#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.hostRoutes">HostRoutes</a></code> | <code>object</code> | host_routes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#id NetworkingSubnetV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.ipVersion">IpVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#ip_version NetworkingSubnetV2#ip_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#name NetworkingSubnetV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.noGateway">NoGateway</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#no_gateway NetworkingSubnetV2#no_gateway}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#region NetworkingSubnetV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#tenant_id NetworkingSubnetV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#value_specs NetworkingSubnetV2#value_specs}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#cidr NetworkingSubnetV2#cidr}.

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.networkId"></a>

```csharp
public string NetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#network_id NetworkingSubnetV2#network_id}.

---

##### `AllocationPools`<sup>Optional</sup> <a name="AllocationPools" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.allocationPools"></a>

```csharp
public object AllocationPools { get; set; }
```

- *Type:* object

allocation_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#allocation_pools NetworkingSubnetV2#allocation_pools}

---

##### `DnsNameservers`<sup>Optional</sup> <a name="DnsNameservers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.dnsNameservers"></a>

```csharp
public string[] DnsNameservers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#dns_nameservers NetworkingSubnetV2#dns_nameservers}.

---

##### `EnableDhcp`<sup>Optional</sup> <a name="EnableDhcp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.enableDhcp"></a>

```csharp
public object EnableDhcp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#enable_dhcp NetworkingSubnetV2#enable_dhcp}.

---

##### `GatewayIp`<sup>Optional</sup> <a name="GatewayIp" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.gatewayIp"></a>

```csharp
public string GatewayIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#gateway_ip NetworkingSubnetV2#gateway_ip}.

---

##### `HostRoutes`<sup>Optional</sup> <a name="HostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.hostRoutes"></a>

```csharp
public object HostRoutes { get; set; }
```

- *Type:* object

host_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#host_routes NetworkingSubnetV2#host_routes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#id NetworkingSubnetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.ipVersion"></a>

```csharp
public double IpVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#ip_version NetworkingSubnetV2#ip_version}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#name NetworkingSubnetV2#name}.

---

##### `NoGateway`<sup>Optional</sup> <a name="NoGateway" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.noGateway"></a>

```csharp
public object NoGateway { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#no_gateway NetworkingSubnetV2#no_gateway}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#region NetworkingSubnetV2#region}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#tenant_id NetworkingSubnetV2#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.timeouts"></a>

```csharp
public NetworkingSubnetV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts">NetworkingSubnetV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#timeouts NetworkingSubnetV2#timeouts}

---

##### `ValueSpecs`<sup>Optional</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Config.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#value_specs NetworkingSubnetV2#value_specs}.

---

### NetworkingSubnetV2HostRoutes <a name="NetworkingSubnetV2HostRoutes" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2HostRoutes {
    string DestinationCidr,
    string NextHop
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.destinationCidr">DestinationCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#destination_cidr NetworkingSubnetV2#destination_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.nextHop">NextHop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#next_hop NetworkingSubnetV2#next_hop}. |

---

##### `DestinationCidr`<sup>Required</sup> <a name="DestinationCidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.destinationCidr"></a>

```csharp
public string DestinationCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#destination_cidr NetworkingSubnetV2#destination_cidr}.

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutes.property.nextHop"></a>

```csharp
public string NextHop { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#next_hop NetworkingSubnetV2#next_hop}.

---

### NetworkingSubnetV2Timeouts <a name="NetworkingSubnetV2Timeouts" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#create NetworkingSubnetV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#delete NetworkingSubnetV2#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#create NetworkingSubnetV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/networking_subnet_v2#delete NetworkingSubnetV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingSubnetV2AllocationPoolsList <a name="NetworkingSubnetV2AllocationPoolsList" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2AllocationPoolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.get"></a>

```csharp
private NetworkingSubnetV2AllocationPoolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkingSubnetV2AllocationPoolsOutputReference <a name="NetworkingSubnetV2AllocationPoolsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2AllocationPoolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkingSubnetV2HostRoutesList <a name="NetworkingSubnetV2HostRoutesList" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2HostRoutesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.get"></a>

```csharp
private NetworkingSubnetV2HostRoutesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkingSubnetV2HostRoutesOutputReference <a name="NetworkingSubnetV2HostRoutesOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2HostRoutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidrInput">DestinationCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHopInput">NextHopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr">DestinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHop">NextHop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationCidrInput`<sup>Optional</sup> <a name="DestinationCidrInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidrInput"></a>

```csharp
public string DestinationCidrInput { get; }
```

- *Type:* string

---

##### `NextHopInput`<sup>Optional</sup> <a name="NextHopInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHopInput"></a>

```csharp
public string NextHopInput { get; }
```

- *Type:* string

---

##### `DestinationCidr`<sup>Required</sup> <a name="DestinationCidr" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr"></a>

```csharp
public string DestinationCidr { get; }
```

- *Type:* string

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.nextHop"></a>

```csharp
public string NextHop { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2HostRoutesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkingSubnetV2TimeoutsOutputReference <a name="NetworkingSubnetV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new NetworkingSubnetV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.networkingSubnetV2.NetworkingSubnetV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



