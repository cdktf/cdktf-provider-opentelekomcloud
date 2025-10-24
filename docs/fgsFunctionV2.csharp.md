# `fgsFunctionV2` Submodule <a name="`fgsFunctionV2` Submodule" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FgsFunctionV2 <a name="FgsFunctionV2" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2 opentelekomcloud_fgs_function_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2(Construct Scope, string Id, FgsFunctionV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config">FgsFunctionV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config">FgsFunctionV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage">PutCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putFuncMounts">PutFuncMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController">PutNetworkController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putReservedInstances">PutReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAgency">ResetAgency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetApp">ResetApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAppAgency">ResetAppAgency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeFilename">ResetCodeFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeType">ResetCodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeUrl">ResetCodeUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetConcurrencyNum">ResetConcurrencyNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCustomImage">ResetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDependList">ResetDependList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDnsList">ResetDnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableAuthInHeader">ResetEnableAuthInHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableClassIsolation">ResetEnableClassIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableDynamicMemory">ResetEnableDynamicMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableLtsLog">ResetEnableLtsLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEncryptedUserData">ResetEncryptedUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnterpriseProjectId">ResetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncCode">ResetFuncCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncMounts">ResetFuncMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFunctiongraphVersion">ResetFunctiongraphVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetGpuMemory">ResetGpuMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHandler">ResetHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHeartbeatHandler">ResetHeartbeatHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerHandler">ResetInitializerHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerTimeout">ResetInitializerTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupId">ResetLogGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicId">ResetLogTopicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicName">ResetLogTopicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLtsCustomTag">ResetLtsCustomTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMaxInstanceNum">ResetMaxInstanceNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserGroupId">ResetMountUserGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserId">ResetMountUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkController">ResetNetworkController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkId">ResetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPeeringCidr">ResetPeeringCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopHandler">ResetPreStopHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopTimeout">ResetPreStopTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetReservedInstances">ResetReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetRestoreHookHandler">ResetRestoreHookHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetRestoreHookTimeout">ResetRestoreHookTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVersions">ResetVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomImage` <a name="PutCustomImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage"></a>

```csharp
private void PutCustomImage(FgsFunctionV2CustomImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

---

##### `PutFuncMounts` <a name="PutFuncMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putFuncMounts"></a>

```csharp
private void PutFuncMounts(IResolvable|FgsFunctionV2FuncMounts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putFuncMounts.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]

---

##### `PutNetworkController` <a name="PutNetworkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController"></a>

```csharp
private void PutNetworkController(FgsFunctionV2NetworkController Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

---

##### `PutReservedInstances` <a name="PutReservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putReservedInstances"></a>

```csharp
private void PutReservedInstances(IResolvable|FgsFunctionV2ReservedInstances[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putReservedInstances.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts"></a>

```csharp
private void PutTimeouts(FgsFunctionV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

---

##### `PutVersions` <a name="PutVersions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putVersions"></a>

```csharp
private void PutVersions(IResolvable|FgsFunctionV2Versions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putVersions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]

---

##### `ResetAgency` <a name="ResetAgency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAgency"></a>

```csharp
private void ResetAgency()
```

##### `ResetApp` <a name="ResetApp" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetApp"></a>

```csharp
private void ResetApp()
```

##### `ResetAppAgency` <a name="ResetAppAgency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAppAgency"></a>

```csharp
private void ResetAppAgency()
```

##### `ResetCodeFilename` <a name="ResetCodeFilename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeFilename"></a>

```csharp
private void ResetCodeFilename()
```

##### `ResetCodeType` <a name="ResetCodeType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeType"></a>

```csharp
private void ResetCodeType()
```

##### `ResetCodeUrl` <a name="ResetCodeUrl" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeUrl"></a>

```csharp
private void ResetCodeUrl()
```

##### `ResetConcurrencyNum` <a name="ResetConcurrencyNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetConcurrencyNum"></a>

```csharp
private void ResetConcurrencyNum()
```

##### `ResetCustomImage` <a name="ResetCustomImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCustomImage"></a>

```csharp
private void ResetCustomImage()
```

##### `ResetDependList` <a name="ResetDependList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDependList"></a>

```csharp
private void ResetDependList()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDnsList` <a name="ResetDnsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDnsList"></a>

```csharp
private void ResetDnsList()
```

##### `ResetEnableAuthInHeader` <a name="ResetEnableAuthInHeader" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableAuthInHeader"></a>

```csharp
private void ResetEnableAuthInHeader()
```

##### `ResetEnableClassIsolation` <a name="ResetEnableClassIsolation" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableClassIsolation"></a>

```csharp
private void ResetEnableClassIsolation()
```

##### `ResetEnableDynamicMemory` <a name="ResetEnableDynamicMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableDynamicMemory"></a>

```csharp
private void ResetEnableDynamicMemory()
```

##### `ResetEnableLtsLog` <a name="ResetEnableLtsLog" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableLtsLog"></a>

```csharp
private void ResetEnableLtsLog()
```

##### `ResetEncryptedUserData` <a name="ResetEncryptedUserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEncryptedUserData"></a>

```csharp
private void ResetEncryptedUserData()
```

##### `ResetEnterpriseProjectId` <a name="ResetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnterpriseProjectId"></a>

```csharp
private void ResetEnterpriseProjectId()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEphemeralStorage"></a>

```csharp
private void ResetEphemeralStorage()
```

##### `ResetFuncCode` <a name="ResetFuncCode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncCode"></a>

```csharp
private void ResetFuncCode()
```

##### `ResetFuncMounts` <a name="ResetFuncMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncMounts"></a>

```csharp
private void ResetFuncMounts()
```

##### `ResetFunctiongraphVersion` <a name="ResetFunctiongraphVersion" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFunctiongraphVersion"></a>

```csharp
private void ResetFunctiongraphVersion()
```

##### `ResetGpuMemory` <a name="ResetGpuMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetGpuMemory"></a>

```csharp
private void ResetGpuMemory()
```

##### `ResetHandler` <a name="ResetHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHandler"></a>

```csharp
private void ResetHandler()
```

##### `ResetHeartbeatHandler` <a name="ResetHeartbeatHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHeartbeatHandler"></a>

```csharp
private void ResetHeartbeatHandler()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitializerHandler` <a name="ResetInitializerHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerHandler"></a>

```csharp
private void ResetInitializerHandler()
```

##### `ResetInitializerTimeout` <a name="ResetInitializerTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerTimeout"></a>

```csharp
private void ResetInitializerTimeout()
```

##### `ResetLogGroupId` <a name="ResetLogGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupId"></a>

```csharp
private void ResetLogGroupId()
```

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupName"></a>

```csharp
private void ResetLogGroupName()
```

##### `ResetLogTopicId` <a name="ResetLogTopicId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicId"></a>

```csharp
private void ResetLogTopicId()
```

##### `ResetLogTopicName` <a name="ResetLogTopicName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicName"></a>

```csharp
private void ResetLogTopicName()
```

##### `ResetLtsCustomTag` <a name="ResetLtsCustomTag" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLtsCustomTag"></a>

```csharp
private void ResetLtsCustomTag()
```

##### `ResetMaxInstanceNum` <a name="ResetMaxInstanceNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMaxInstanceNum"></a>

```csharp
private void ResetMaxInstanceNum()
```

##### `ResetMountUserGroupId` <a name="ResetMountUserGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserGroupId"></a>

```csharp
private void ResetMountUserGroupId()
```

##### `ResetMountUserId` <a name="ResetMountUserId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserId"></a>

```csharp
private void ResetMountUserId()
```

##### `ResetNetworkController` <a name="ResetNetworkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkController"></a>

```csharp
private void ResetNetworkController()
```

##### `ResetNetworkId` <a name="ResetNetworkId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkId"></a>

```csharp
private void ResetNetworkId()
```

##### `ResetPeeringCidr` <a name="ResetPeeringCidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPeeringCidr"></a>

```csharp
private void ResetPeeringCidr()
```

##### `ResetPreStopHandler` <a name="ResetPreStopHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopHandler"></a>

```csharp
private void ResetPreStopHandler()
```

##### `ResetPreStopTimeout` <a name="ResetPreStopTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopTimeout"></a>

```csharp
private void ResetPreStopTimeout()
```

##### `ResetReservedInstances` <a name="ResetReservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetReservedInstances"></a>

```csharp
private void ResetReservedInstances()
```

##### `ResetRestoreHookHandler` <a name="ResetRestoreHookHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetRestoreHookHandler"></a>

```csharp
private void ResetRestoreHookHandler()
```

##### `ResetRestoreHookTimeout` <a name="ResetRestoreHookTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetRestoreHookTimeout"></a>

```csharp
private void ResetRestoreHookTimeout()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetVersions` <a name="ResetVersions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVersions"></a>

```csharp
private void ResetVersions()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FgsFunctionV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FgsFunctionV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FgsFunctionV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FgsFunctionV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

FgsFunctionV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FgsFunctionV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FgsFunctionV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FgsFunctionV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FgsFunctionV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.allowEphemeralStorage">AllowEphemeralStorage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.apigRouteEnable">ApigRouteEnable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImage">CustomImage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference">FgsFunctionV2CustomImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.extendConfig">ExtendConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMounts">FuncMounts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList">FgsFunctionV2FuncMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuType">GpuType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.isStatefulFunction">IsStatefulFunction</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkController">NetworkController</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference">FgsFunctionV2NetworkControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstances">ReservedInstances</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList">FgsFunctionV2ReservedInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference">FgsFunctionV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.urn">Urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList">FgsFunctionV2VersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agencyInput">AgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgencyInput">AppAgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appInput">AppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilenameInput">CodeFilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeTypeInput">CodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrlInput">CodeUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNumInput">ConcurrencyNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImageInput">CustomImageInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependListInput">DependListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsListInput">DnsListInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeaderInput">EnableAuthInHeaderInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolationInput">EnableClassIsolationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemoryInput">EnableDynamicMemoryInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableLtsLogInput">EnableLtsLogInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserDataInput">EncryptedUserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enterpriseProjectIdInput">EnterpriseProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCodeInput">FuncCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMountsInput">FuncMountsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersionInput">FunctiongraphVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemoryInput">GpuMemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handlerInput">HandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandlerInput">HeartbeatHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandlerInput">InitializerHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeoutInput">InitializerTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicIdInput">LogTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicNameInput">LogTopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ltsCustomTagInput">LtsCustomTagInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNumInput">MaxInstanceNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySizeInput">MemorySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupIdInput">MountUserGroupIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserIdInput">MountUserIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkControllerInput">NetworkControllerInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkIdInput">NetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidrInput">PeeringCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandlerInput">PreStopHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeoutInput">PreStopTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstancesInput">ReservedInstancesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookHandlerInput">RestoreHookHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookTimeoutInput">RestoreHookTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versionsInput">VersionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agency">Agency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgency">AppAgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilename">CodeFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeType">CodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrl">CodeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNum">ConcurrencyNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependList">DependList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsList">DnsList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeader">EnableAuthInHeader</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolation">EnableClassIsolation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemory">EnableDynamicMemory</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableLtsLog">EnableLtsLog</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserData">EncryptedUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorage">EphemeralStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCode">FuncCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersion">FunctiongraphVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemory">GpuMemory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handler">Handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandler">HeartbeatHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandler">InitializerHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeout">InitializerTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicId">LogTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicName">LogTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ltsCustomTag">LtsCustomTag</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNum">MaxInstanceNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySize">MemorySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupId">MountUserGroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserId">MountUserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidr">PeeringCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandler">PreStopHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeout">PreStopTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookHandler">RestoreHookHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookTimeout">RestoreHookTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AllowEphemeralStorage`<sup>Required</sup> <a name="AllowEphemeralStorage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.allowEphemeralStorage"></a>

```csharp
public IResolvable AllowEphemeralStorage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ApigRouteEnable`<sup>Required</sup> <a name="ApigRouteEnable" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.apigRouteEnable"></a>

```csharp
public IResolvable ApigRouteEnable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CustomImage`<sup>Required</sup> <a name="CustomImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImage"></a>

```csharp
public FgsFunctionV2CustomImageOutputReference CustomImage { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference">FgsFunctionV2CustomImageOutputReference</a>

---

##### `ExtendConfig`<sup>Required</sup> <a name="ExtendConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.extendConfig"></a>

```csharp
public string ExtendConfig { get; }
```

- *Type:* string

---

##### `FuncMounts`<sup>Required</sup> <a name="FuncMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMounts"></a>

```csharp
public FgsFunctionV2FuncMountsList FuncMounts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList">FgsFunctionV2FuncMountsList</a>

---

##### `GpuType`<sup>Required</sup> <a name="GpuType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuType"></a>

```csharp
public string GpuType { get; }
```

- *Type:* string

---

##### `IsStatefulFunction`<sup>Required</sup> <a name="IsStatefulFunction" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.isStatefulFunction"></a>

```csharp
public IResolvable IsStatefulFunction { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetworkController`<sup>Required</sup> <a name="NetworkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkController"></a>

```csharp
public FgsFunctionV2NetworkControllerOutputReference NetworkController { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference">FgsFunctionV2NetworkControllerOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReservedInstances`<sup>Required</sup> <a name="ReservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstances"></a>

```csharp
public FgsFunctionV2ReservedInstancesList ReservedInstances { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList">FgsFunctionV2ReservedInstancesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeouts"></a>

```csharp
public FgsFunctionV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference">FgsFunctionV2TimeoutsOutputReference</a>

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.urn"></a>

```csharp
public string Urn { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versions"></a>

```csharp
public FgsFunctionV2VersionsList Versions { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList">FgsFunctionV2VersionsList</a>

---

##### `AgencyInput`<sup>Optional</sup> <a name="AgencyInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agencyInput"></a>

```csharp
public string AgencyInput { get; }
```

- *Type:* string

---

##### `AppAgencyInput`<sup>Optional</sup> <a name="AppAgencyInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgencyInput"></a>

```csharp
public string AppAgencyInput { get; }
```

- *Type:* string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appInput"></a>

```csharp
public string AppInput { get; }
```

- *Type:* string

---

##### `CodeFilenameInput`<sup>Optional</sup> <a name="CodeFilenameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilenameInput"></a>

```csharp
public string CodeFilenameInput { get; }
```

- *Type:* string

---

##### `CodeTypeInput`<sup>Optional</sup> <a name="CodeTypeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeTypeInput"></a>

```csharp
public string CodeTypeInput { get; }
```

- *Type:* string

---

##### `CodeUrlInput`<sup>Optional</sup> <a name="CodeUrlInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrlInput"></a>

```csharp
public string CodeUrlInput { get; }
```

- *Type:* string

---

##### `ConcurrencyNumInput`<sup>Optional</sup> <a name="ConcurrencyNumInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNumInput"></a>

```csharp
public double ConcurrencyNumInput { get; }
```

- *Type:* double

---

##### `CustomImageInput`<sup>Optional</sup> <a name="CustomImageInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImageInput"></a>

```csharp
public FgsFunctionV2CustomImage CustomImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

---

##### `DependListInput`<sup>Optional</sup> <a name="DependListInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependListInput"></a>

```csharp
public string[] DependListInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsListInput`<sup>Optional</sup> <a name="DnsListInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsListInput"></a>

```csharp
public string DnsListInput { get; }
```

- *Type:* string

---

##### `EnableAuthInHeaderInput`<sup>Optional</sup> <a name="EnableAuthInHeaderInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeaderInput"></a>

```csharp
public bool|IResolvable EnableAuthInHeaderInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableClassIsolationInput`<sup>Optional</sup> <a name="EnableClassIsolationInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolationInput"></a>

```csharp
public bool|IResolvable EnableClassIsolationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableDynamicMemoryInput`<sup>Optional</sup> <a name="EnableDynamicMemoryInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemoryInput"></a>

```csharp
public bool|IResolvable EnableDynamicMemoryInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableLtsLogInput`<sup>Optional</sup> <a name="EnableLtsLogInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableLtsLogInput"></a>

```csharp
public bool|IResolvable EnableLtsLogInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EncryptedUserDataInput`<sup>Optional</sup> <a name="EncryptedUserDataInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserDataInput"></a>

```csharp
public string EncryptedUserDataInput { get; }
```

- *Type:* string

---

##### `EnterpriseProjectIdInput`<sup>Optional</sup> <a name="EnterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enterpriseProjectIdInput"></a>

```csharp
public string EnterpriseProjectIdInput { get; }
```

- *Type:* string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorageInput"></a>

```csharp
public double EphemeralStorageInput { get; }
```

- *Type:* double

---

##### `FuncCodeInput`<sup>Optional</sup> <a name="FuncCodeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCodeInput"></a>

```csharp
public string FuncCodeInput { get; }
```

- *Type:* string

---

##### `FuncMountsInput`<sup>Optional</sup> <a name="FuncMountsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMountsInput"></a>

```csharp
public IResolvable|FgsFunctionV2FuncMounts[] FuncMountsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]

---

##### `FunctiongraphVersionInput`<sup>Optional</sup> <a name="FunctiongraphVersionInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersionInput"></a>

```csharp
public string FunctiongraphVersionInput { get; }
```

- *Type:* string

---

##### `GpuMemoryInput`<sup>Optional</sup> <a name="GpuMemoryInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemoryInput"></a>

```csharp
public double GpuMemoryInput { get; }
```

- *Type:* double

---

##### `HandlerInput`<sup>Optional</sup> <a name="HandlerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handlerInput"></a>

```csharp
public string HandlerInput { get; }
```

- *Type:* string

---

##### `HeartbeatHandlerInput`<sup>Optional</sup> <a name="HeartbeatHandlerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandlerInput"></a>

```csharp
public string HeartbeatHandlerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitializerHandlerInput`<sup>Optional</sup> <a name="InitializerHandlerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandlerInput"></a>

```csharp
public string InitializerHandlerInput { get; }
```

- *Type:* string

---

##### `InitializerTimeoutInput`<sup>Optional</sup> <a name="InitializerTimeoutInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeoutInput"></a>

```csharp
public double InitializerTimeoutInput { get; }
```

- *Type:* double

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogTopicIdInput`<sup>Optional</sup> <a name="LogTopicIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicIdInput"></a>

```csharp
public string LogTopicIdInput { get; }
```

- *Type:* string

---

##### `LogTopicNameInput`<sup>Optional</sup> <a name="LogTopicNameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicNameInput"></a>

```csharp
public string LogTopicNameInput { get; }
```

- *Type:* string

---

##### `LtsCustomTagInput`<sup>Optional</sup> <a name="LtsCustomTagInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ltsCustomTagInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LtsCustomTagInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxInstanceNumInput`<sup>Optional</sup> <a name="MaxInstanceNumInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNumInput"></a>

```csharp
public string MaxInstanceNumInput { get; }
```

- *Type:* string

---

##### `MemorySizeInput`<sup>Optional</sup> <a name="MemorySizeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySizeInput"></a>

```csharp
public double MemorySizeInput { get; }
```

- *Type:* double

---

##### `MountUserGroupIdInput`<sup>Optional</sup> <a name="MountUserGroupIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupIdInput"></a>

```csharp
public double MountUserGroupIdInput { get; }
```

- *Type:* double

---

##### `MountUserIdInput`<sup>Optional</sup> <a name="MountUserIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserIdInput"></a>

```csharp
public double MountUserIdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkControllerInput`<sup>Optional</sup> <a name="NetworkControllerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkControllerInput"></a>

```csharp
public FgsFunctionV2NetworkController NetworkControllerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkIdInput"></a>

```csharp
public string NetworkIdInput { get; }
```

- *Type:* string

---

##### `PeeringCidrInput`<sup>Optional</sup> <a name="PeeringCidrInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidrInput"></a>

```csharp
public string PeeringCidrInput { get; }
```

- *Type:* string

---

##### `PreStopHandlerInput`<sup>Optional</sup> <a name="PreStopHandlerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandlerInput"></a>

```csharp
public string PreStopHandlerInput { get; }
```

- *Type:* string

---

##### `PreStopTimeoutInput`<sup>Optional</sup> <a name="PreStopTimeoutInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeoutInput"></a>

```csharp
public double PreStopTimeoutInput { get; }
```

- *Type:* double

---

##### `ReservedInstancesInput`<sup>Optional</sup> <a name="ReservedInstancesInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstancesInput"></a>

```csharp
public IResolvable|FgsFunctionV2ReservedInstances[] ReservedInstancesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]

---

##### `RestoreHookHandlerInput`<sup>Optional</sup> <a name="RestoreHookHandlerInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookHandlerInput"></a>

```csharp
public string RestoreHookHandlerInput { get; }
```

- *Type:* string

---

##### `RestoreHookTimeoutInput`<sup>Optional</sup> <a name="RestoreHookTimeoutInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookTimeoutInput"></a>

```csharp
public double RestoreHookTimeoutInput { get; }
```

- *Type:* double

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutsInput"></a>

```csharp
public IResolvable|FgsFunctionV2Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versionsInput"></a>

```csharp
public IResolvable|FgsFunctionV2Versions[] VersionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Agency`<sup>Required</sup> <a name="Agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agency"></a>

```csharp
public string Agency { get; }
```

- *Type:* string

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `AppAgency`<sup>Required</sup> <a name="AppAgency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgency"></a>

```csharp
public string AppAgency { get; }
```

- *Type:* string

---

##### `CodeFilename`<sup>Required</sup> <a name="CodeFilename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilename"></a>

```csharp
public string CodeFilename { get; }
```

- *Type:* string

---

##### `CodeType`<sup>Required</sup> <a name="CodeType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeType"></a>

```csharp
public string CodeType { get; }
```

- *Type:* string

---

##### `CodeUrl`<sup>Required</sup> <a name="CodeUrl" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrl"></a>

```csharp
public string CodeUrl { get; }
```

- *Type:* string

---

##### `ConcurrencyNum`<sup>Required</sup> <a name="ConcurrencyNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNum"></a>

```csharp
public double ConcurrencyNum { get; }
```

- *Type:* double

---

##### `DependList`<sup>Required</sup> <a name="DependList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependList"></a>

```csharp
public string[] DependList { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsList`<sup>Required</sup> <a name="DnsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsList"></a>

```csharp
public string DnsList { get; }
```

- *Type:* string

---

##### `EnableAuthInHeader`<sup>Required</sup> <a name="EnableAuthInHeader" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeader"></a>

```csharp
public bool|IResolvable EnableAuthInHeader { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableClassIsolation`<sup>Required</sup> <a name="EnableClassIsolation" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolation"></a>

```csharp
public bool|IResolvable EnableClassIsolation { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableDynamicMemory`<sup>Required</sup> <a name="EnableDynamicMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemory"></a>

```csharp
public bool|IResolvable EnableDynamicMemory { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableLtsLog`<sup>Required</sup> <a name="EnableLtsLog" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableLtsLog"></a>

```csharp
public bool|IResolvable EnableLtsLog { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EncryptedUserData`<sup>Required</sup> <a name="EncryptedUserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserData"></a>

```csharp
public string EncryptedUserData { get; }
```

- *Type:* string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; }
```

- *Type:* string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorage"></a>

```csharp
public double EphemeralStorage { get; }
```

- *Type:* double

---

##### `FuncCode`<sup>Required</sup> <a name="FuncCode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCode"></a>

```csharp
public string FuncCode { get; }
```

- *Type:* string

---

##### `FunctiongraphVersion`<sup>Required</sup> <a name="FunctiongraphVersion" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersion"></a>

```csharp
public string FunctiongraphVersion { get; }
```

- *Type:* string

---

##### `GpuMemory`<sup>Required</sup> <a name="GpuMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemory"></a>

```csharp
public double GpuMemory { get; }
```

- *Type:* double

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handler"></a>

```csharp
public string Handler { get; }
```

- *Type:* string

---

##### `HeartbeatHandler`<sup>Required</sup> <a name="HeartbeatHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandler"></a>

```csharp
public string HeartbeatHandler { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitializerHandler`<sup>Required</sup> <a name="InitializerHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandler"></a>

```csharp
public string InitializerHandler { get; }
```

- *Type:* string

---

##### `InitializerTimeout`<sup>Required</sup> <a name="InitializerTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeout"></a>

```csharp
public double InitializerTimeout { get; }
```

- *Type:* double

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogTopicId`<sup>Required</sup> <a name="LogTopicId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicId"></a>

```csharp
public string LogTopicId { get; }
```

- *Type:* string

---

##### `LogTopicName`<sup>Required</sup> <a name="LogTopicName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicName"></a>

```csharp
public string LogTopicName { get; }
```

- *Type:* string

---

##### `LtsCustomTag`<sup>Required</sup> <a name="LtsCustomTag" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ltsCustomTag"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LtsCustomTag { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxInstanceNum`<sup>Required</sup> <a name="MaxInstanceNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNum"></a>

```csharp
public string MaxInstanceNum { get; }
```

- *Type:* string

---

##### `MemorySize`<sup>Required</sup> <a name="MemorySize" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySize"></a>

```csharp
public double MemorySize { get; }
```

- *Type:* double

---

##### `MountUserGroupId`<sup>Required</sup> <a name="MountUserGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupId"></a>

```csharp
public double MountUserGroupId { get; }
```

- *Type:* double

---

##### `MountUserId`<sup>Required</sup> <a name="MountUserId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserId"></a>

```csharp
public double MountUserId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `PeeringCidr`<sup>Required</sup> <a name="PeeringCidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidr"></a>

```csharp
public string PeeringCidr { get; }
```

- *Type:* string

---

##### `PreStopHandler`<sup>Required</sup> <a name="PreStopHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandler"></a>

```csharp
public string PreStopHandler { get; }
```

- *Type:* string

---

##### `PreStopTimeout`<sup>Required</sup> <a name="PreStopTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeout"></a>

```csharp
public double PreStopTimeout { get; }
```

- *Type:* double

---

##### `RestoreHookHandler`<sup>Required</sup> <a name="RestoreHookHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookHandler"></a>

```csharp
public string RestoreHookHandler { get; }
```

- *Type:* string

---

##### `RestoreHookTimeout`<sup>Required</sup> <a name="RestoreHookTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookTimeout"></a>

```csharp
public double RestoreHookTimeout { get; }
```

- *Type:* double

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FgsFunctionV2Config <a name="FgsFunctionV2Config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double MemorySize,
    string Name,
    string Runtime,
    double Timeout,
    string Agency = null,
    string App = null,
    string AppAgency = null,
    string CodeFilename = null,
    string CodeType = null,
    string CodeUrl = null,
    double ConcurrencyNum = null,
    FgsFunctionV2CustomImage CustomImage = null,
    string[] DependList = null,
    string Description = null,
    string DnsList = null,
    bool|IResolvable EnableAuthInHeader = null,
    bool|IResolvable EnableClassIsolation = null,
    bool|IResolvable EnableDynamicMemory = null,
    bool|IResolvable EnableLtsLog = null,
    string EncryptedUserData = null,
    string EnterpriseProjectId = null,
    double EphemeralStorage = null,
    string FuncCode = null,
    IResolvable|FgsFunctionV2FuncMounts[] FuncMounts = null,
    string FunctiongraphVersion = null,
    double GpuMemory = null,
    string Handler = null,
    string HeartbeatHandler = null,
    string Id = null,
    string InitializerHandler = null,
    double InitializerTimeout = null,
    string LogGroupId = null,
    string LogGroupName = null,
    string LogTopicId = null,
    string LogTopicName = null,
    System.Collections.Generic.IDictionary<string, string> LtsCustomTag = null,
    string MaxInstanceNum = null,
    double MountUserGroupId = null,
    double MountUserId = null,
    FgsFunctionV2NetworkController NetworkController = null,
    string NetworkId = null,
    string PeeringCidr = null,
    string PreStopHandler = null,
    double PreStopTimeout = null,
    IResolvable|FgsFunctionV2ReservedInstances[] ReservedInstances = null,
    string RestoreHookHandler = null,
    double RestoreHookTimeout = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    FgsFunctionV2Timeouts Timeouts = null,
    string UserData = null,
    IResolvable|FgsFunctionV2Versions[] Versions = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.memorySize">MemorySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#memory_size FgsFunctionV2#memory_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.runtime">Runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#runtime FgsFunctionV2#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#timeout FgsFunctionV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.agency">Agency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#agency FgsFunctionV2#agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.app">App</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#app FgsFunctionV2#app}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.appAgency">AppAgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#app_agency FgsFunctionV2#app_agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeFilename">CodeFilename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#code_filename FgsFunctionV2#code_filename}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeType">CodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#code_type FgsFunctionV2#code_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeUrl">CodeUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#code_url FgsFunctionV2#code_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.concurrencyNum">ConcurrencyNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#concurrency_num FgsFunctionV2#concurrency_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.customImage">CustomImage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | custom_image block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependList">DependList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#depend_list FgsFunctionV2#depend_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#description FgsFunctionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dnsList">DnsList</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#dns_list FgsFunctionV2#dns_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableAuthInHeader">EnableAuthInHeader</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enable_auth_in_header FgsFunctionV2#enable_auth_in_header}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableClassIsolation">EnableClassIsolation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enable_class_isolation FgsFunctionV2#enable_class_isolation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableDynamicMemory">EnableDynamicMemory</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enable_dynamic_memory FgsFunctionV2#enable_dynamic_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableLtsLog">EnableLtsLog</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enable_lts_log FgsFunctionV2#enable_lts_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.encryptedUserData">EncryptedUserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#encrypted_user_data FgsFunctionV2#encrypted_user_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enterprise_project_id FgsFunctionV2#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.ephemeralStorage">EphemeralStorage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#ephemeral_storage FgsFunctionV2#ephemeral_storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcCode">FuncCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#func_code FgsFunctionV2#func_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcMounts">FuncMounts</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]</code> | func_mounts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.functiongraphVersion">FunctiongraphVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#functiongraph_version FgsFunctionV2#functiongraph_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.gpuMemory">GpuMemory</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#gpu_memory FgsFunctionV2#gpu_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.handler">Handler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#handler FgsFunctionV2#handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.heartbeatHandler">HeartbeatHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#heartbeat_handler FgsFunctionV2#heartbeat_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#id FgsFunctionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerHandler">InitializerHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#initializer_handler FgsFunctionV2#initializer_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerTimeout">InitializerTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#initializer_timeout FgsFunctionV2#initializer_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#log_group_id FgsFunctionV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#log_group_name FgsFunctionV2#log_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicId">LogTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#log_topic_id FgsFunctionV2#log_topic_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicName">LogTopicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#log_topic_name FgsFunctionV2#log_topic_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.ltsCustomTag">LtsCustomTag</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#lts_custom_tag FgsFunctionV2#lts_custom_tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.maxInstanceNum">MaxInstanceNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#max_instance_num FgsFunctionV2#max_instance_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserGroupId">MountUserGroupId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_user_group_id FgsFunctionV2#mount_user_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserId">MountUserId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_user_id FgsFunctionV2#mount_user_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkController">NetworkController</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | network_controller block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkId">NetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#network_id FgsFunctionV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.peeringCidr">PeeringCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#peering_cidr FgsFunctionV2#peering_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopHandler">PreStopHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#pre_stop_handler FgsFunctionV2#pre_stop_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopTimeout">PreStopTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#pre_stop_timeout FgsFunctionV2#pre_stop_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.reservedInstances">ReservedInstances</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]</code> | reserved_instances block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.restoreHookHandler">RestoreHookHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#restore_hook_handler FgsFunctionV2#restore_hook_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.restoreHookTimeout">RestoreHookTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#restore_hook_timeout FgsFunctionV2#restore_hook_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#tags FgsFunctionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#user_data FgsFunctionV2#user_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.versions">Versions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]</code> | versions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `MemorySize`<sup>Required</sup> <a name="MemorySize" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.memorySize"></a>

```csharp
public double MemorySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#memory_size FgsFunctionV2#memory_size}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#runtime FgsFunctionV2#runtime}.

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#timeout FgsFunctionV2#timeout}.

---

##### `Agency`<sup>Optional</sup> <a name="Agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.agency"></a>

```csharp
public string Agency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#agency FgsFunctionV2#agency}.

---

##### `App`<sup>Optional</sup> <a name="App" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.app"></a>

```csharp
public string App { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#app FgsFunctionV2#app}.

---

##### `AppAgency`<sup>Optional</sup> <a name="AppAgency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.appAgency"></a>

```csharp
public string AppAgency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#app_agency FgsFunctionV2#app_agency}.

---

##### `CodeFilename`<sup>Optional</sup> <a name="CodeFilename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeFilename"></a>

```csharp
public string CodeFilename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#code_filename FgsFunctionV2#code_filename}.

---

##### `CodeType`<sup>Optional</sup> <a name="CodeType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeType"></a>

```csharp
public string CodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#code_type FgsFunctionV2#code_type}.

---

##### `CodeUrl`<sup>Optional</sup> <a name="CodeUrl" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeUrl"></a>

```csharp
public string CodeUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#code_url FgsFunctionV2#code_url}.

---

##### `ConcurrencyNum`<sup>Optional</sup> <a name="ConcurrencyNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.concurrencyNum"></a>

```csharp
public double ConcurrencyNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#concurrency_num FgsFunctionV2#concurrency_num}.

---

##### `CustomImage`<sup>Optional</sup> <a name="CustomImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.customImage"></a>

```csharp
public FgsFunctionV2CustomImage CustomImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#custom_image FgsFunctionV2#custom_image}

---

##### `DependList`<sup>Optional</sup> <a name="DependList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependList"></a>

```csharp
public string[] DependList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#depend_list FgsFunctionV2#depend_list}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

##### `DnsList`<sup>Optional</sup> <a name="DnsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dnsList"></a>

```csharp
public string DnsList { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#dns_list FgsFunctionV2#dns_list}.

---

##### `EnableAuthInHeader`<sup>Optional</sup> <a name="EnableAuthInHeader" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableAuthInHeader"></a>

```csharp
public bool|IResolvable EnableAuthInHeader { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enable_auth_in_header FgsFunctionV2#enable_auth_in_header}.

---

##### `EnableClassIsolation`<sup>Optional</sup> <a name="EnableClassIsolation" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableClassIsolation"></a>

```csharp
public bool|IResolvable EnableClassIsolation { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enable_class_isolation FgsFunctionV2#enable_class_isolation}.

---

##### `EnableDynamicMemory`<sup>Optional</sup> <a name="EnableDynamicMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableDynamicMemory"></a>

```csharp
public bool|IResolvable EnableDynamicMemory { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enable_dynamic_memory FgsFunctionV2#enable_dynamic_memory}.

---

##### `EnableLtsLog`<sup>Optional</sup> <a name="EnableLtsLog" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableLtsLog"></a>

```csharp
public bool|IResolvable EnableLtsLog { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enable_lts_log FgsFunctionV2#enable_lts_log}.

---

##### `EncryptedUserData`<sup>Optional</sup> <a name="EncryptedUserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.encryptedUserData"></a>

```csharp
public string EncryptedUserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#encrypted_user_data FgsFunctionV2#encrypted_user_data}.

---

##### `EnterpriseProjectId`<sup>Optional</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#enterprise_project_id FgsFunctionV2#enterprise_project_id}.

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.ephemeralStorage"></a>

```csharp
public double EphemeralStorage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#ephemeral_storage FgsFunctionV2#ephemeral_storage}.

---

##### `FuncCode`<sup>Optional</sup> <a name="FuncCode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcCode"></a>

```csharp
public string FuncCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#func_code FgsFunctionV2#func_code}.

---

##### `FuncMounts`<sup>Optional</sup> <a name="FuncMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcMounts"></a>

```csharp
public IResolvable|FgsFunctionV2FuncMounts[] FuncMounts { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]

func_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#func_mounts FgsFunctionV2#func_mounts}

---

##### `FunctiongraphVersion`<sup>Optional</sup> <a name="FunctiongraphVersion" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.functiongraphVersion"></a>

```csharp
public string FunctiongraphVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#functiongraph_version FgsFunctionV2#functiongraph_version}.

---

##### `GpuMemory`<sup>Optional</sup> <a name="GpuMemory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.gpuMemory"></a>

```csharp
public double GpuMemory { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#gpu_memory FgsFunctionV2#gpu_memory}.

---

##### `Handler`<sup>Optional</sup> <a name="Handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.handler"></a>

```csharp
public string Handler { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#handler FgsFunctionV2#handler}.

---

##### `HeartbeatHandler`<sup>Optional</sup> <a name="HeartbeatHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.heartbeatHandler"></a>

```csharp
public string HeartbeatHandler { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#heartbeat_handler FgsFunctionV2#heartbeat_handler}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#id FgsFunctionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitializerHandler`<sup>Optional</sup> <a name="InitializerHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerHandler"></a>

```csharp
public string InitializerHandler { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#initializer_handler FgsFunctionV2#initializer_handler}.

---

##### `InitializerTimeout`<sup>Optional</sup> <a name="InitializerTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerTimeout"></a>

```csharp
public double InitializerTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#initializer_timeout FgsFunctionV2#initializer_timeout}.

---

##### `LogGroupId`<sup>Optional</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#log_group_id FgsFunctionV2#log_group_id}.

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#log_group_name FgsFunctionV2#log_group_name}.

---

##### `LogTopicId`<sup>Optional</sup> <a name="LogTopicId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicId"></a>

```csharp
public string LogTopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#log_topic_id FgsFunctionV2#log_topic_id}.

---

##### `LogTopicName`<sup>Optional</sup> <a name="LogTopicName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicName"></a>

```csharp
public string LogTopicName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#log_topic_name FgsFunctionV2#log_topic_name}.

---

##### `LtsCustomTag`<sup>Optional</sup> <a name="LtsCustomTag" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.ltsCustomTag"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LtsCustomTag { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#lts_custom_tag FgsFunctionV2#lts_custom_tag}.

---

##### `MaxInstanceNum`<sup>Optional</sup> <a name="MaxInstanceNum" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.maxInstanceNum"></a>

```csharp
public string MaxInstanceNum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#max_instance_num FgsFunctionV2#max_instance_num}.

---

##### `MountUserGroupId`<sup>Optional</sup> <a name="MountUserGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserGroupId"></a>

```csharp
public double MountUserGroupId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_user_group_id FgsFunctionV2#mount_user_group_id}.

---

##### `MountUserId`<sup>Optional</sup> <a name="MountUserId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserId"></a>

```csharp
public double MountUserId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_user_id FgsFunctionV2#mount_user_id}.

---

##### `NetworkController`<sup>Optional</sup> <a name="NetworkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkController"></a>

```csharp
public FgsFunctionV2NetworkController NetworkController { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

network_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#network_controller FgsFunctionV2#network_controller}

---

##### `NetworkId`<sup>Optional</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkId"></a>

```csharp
public string NetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#network_id FgsFunctionV2#network_id}.

---

##### `PeeringCidr`<sup>Optional</sup> <a name="PeeringCidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.peeringCidr"></a>

```csharp
public string PeeringCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#peering_cidr FgsFunctionV2#peering_cidr}.

---

##### `PreStopHandler`<sup>Optional</sup> <a name="PreStopHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopHandler"></a>

```csharp
public string PreStopHandler { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#pre_stop_handler FgsFunctionV2#pre_stop_handler}.

---

##### `PreStopTimeout`<sup>Optional</sup> <a name="PreStopTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopTimeout"></a>

```csharp
public double PreStopTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#pre_stop_timeout FgsFunctionV2#pre_stop_timeout}.

---

##### `ReservedInstances`<sup>Optional</sup> <a name="ReservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.reservedInstances"></a>

```csharp
public IResolvable|FgsFunctionV2ReservedInstances[] ReservedInstances { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]

reserved_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#reserved_instances FgsFunctionV2#reserved_instances}

---

##### `RestoreHookHandler`<sup>Optional</sup> <a name="RestoreHookHandler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.restoreHookHandler"></a>

```csharp
public string RestoreHookHandler { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#restore_hook_handler FgsFunctionV2#restore_hook_handler}.

---

##### `RestoreHookTimeout`<sup>Optional</sup> <a name="RestoreHookTimeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.restoreHookTimeout"></a>

```csharp
public double RestoreHookTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#restore_hook_timeout FgsFunctionV2#restore_hook_timeout}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#tags FgsFunctionV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeouts"></a>

```csharp
public FgsFunctionV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#timeouts FgsFunctionV2#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#user_data FgsFunctionV2#user_data}.

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.versions"></a>

```csharp
public IResolvable|FgsFunctionV2Versions[] Versions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#versions FgsFunctionV2#versions}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}.

---

### FgsFunctionV2CustomImage <a name="FgsFunctionV2CustomImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2CustomImage {
    string Url,
    string Args = null,
    string Command = null,
    string UserGroupId = null,
    string UserId = null,
    string WorkingDir = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#url FgsFunctionV2#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.args">Args</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#args FgsFunctionV2#args}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.command">Command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#command FgsFunctionV2#command}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.userGroupId">UserGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#user_group_id FgsFunctionV2#user_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#user_id FgsFunctionV2#user_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.workingDir">WorkingDir</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#working_dir FgsFunctionV2#working_dir}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#url FgsFunctionV2#url}.

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.args"></a>

```csharp
public string Args { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#args FgsFunctionV2#args}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.command"></a>

```csharp
public string Command { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#command FgsFunctionV2#command}.

---

##### `UserGroupId`<sup>Optional</sup> <a name="UserGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.userGroupId"></a>

```csharp
public string UserGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#user_group_id FgsFunctionV2#user_group_id}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#user_id FgsFunctionV2#user_id}.

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.workingDir"></a>

```csharp
public string WorkingDir { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#working_dir FgsFunctionV2#working_dir}.

---

### FgsFunctionV2FuncMounts <a name="FgsFunctionV2FuncMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2FuncMounts {
    string LocalMountPath,
    string MountResource,
    string MountSharePath,
    string MountType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.localMountPath">LocalMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#local_mount_path FgsFunctionV2#local_mount_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountResource">MountResource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_resource FgsFunctionV2#mount_resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountSharePath">MountSharePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_share_path FgsFunctionV2#mount_share_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountType">MountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_type FgsFunctionV2#mount_type}. |

---

##### `LocalMountPath`<sup>Required</sup> <a name="LocalMountPath" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.localMountPath"></a>

```csharp
public string LocalMountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#local_mount_path FgsFunctionV2#local_mount_path}.

---

##### `MountResource`<sup>Required</sup> <a name="MountResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountResource"></a>

```csharp
public string MountResource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_resource FgsFunctionV2#mount_resource}.

---

##### `MountSharePath`<sup>Required</sup> <a name="MountSharePath" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountSharePath"></a>

```csharp
public string MountSharePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_share_path FgsFunctionV2#mount_share_path}.

---

##### `MountType`<sup>Required</sup> <a name="MountType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountType"></a>

```csharp
public string MountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#mount_type FgsFunctionV2#mount_type}.

---

### FgsFunctionV2NetworkController <a name="FgsFunctionV2NetworkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2NetworkController {
    bool|IResolvable DisablePublicNetwork = null,
    IResolvable|FgsFunctionV2NetworkControllerTriggerAccessVpcs[] TriggerAccessVpcs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.disablePublicNetwork">DisablePublicNetwork</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#disable_public_network FgsFunctionV2#disable_public_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.triggerAccessVpcs">TriggerAccessVpcs</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]</code> | trigger_access_vpcs block. |

---

##### `DisablePublicNetwork`<sup>Optional</sup> <a name="DisablePublicNetwork" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.disablePublicNetwork"></a>

```csharp
public bool|IResolvable DisablePublicNetwork { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#disable_public_network FgsFunctionV2#disable_public_network}.

---

##### `TriggerAccessVpcs`<sup>Optional</sup> <a name="TriggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.triggerAccessVpcs"></a>

```csharp
public IResolvable|FgsFunctionV2NetworkControllerTriggerAccessVpcs[] TriggerAccessVpcs { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]

trigger_access_vpcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#trigger_access_vpcs FgsFunctionV2#trigger_access_vpcs}

---

### FgsFunctionV2NetworkControllerTriggerAccessVpcs <a name="FgsFunctionV2NetworkControllerTriggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2NetworkControllerTriggerAccessVpcs {
    string VpcId = null,
    string VpcName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcName">VpcName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#vpc_name FgsFunctionV2#vpc_name}. |

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}.

---

##### `VpcName`<sup>Optional</sup> <a name="VpcName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcName"></a>

```csharp
public string VpcName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#vpc_name FgsFunctionV2#vpc_name}.

---

### FgsFunctionV2ReservedInstances <a name="FgsFunctionV2ReservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2ReservedInstances {
    double Count,
    string QualifierName,
    string QualifierType,
    bool|IResolvable IdleMode = null,
    FgsFunctionV2ReservedInstancesTacticsConfig TacticsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#count FgsFunctionV2#count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierName">QualifierName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#qualifier_name FgsFunctionV2#qualifier_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierType">QualifierType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#qualifier_type FgsFunctionV2#qualifier_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.idleMode">IdleMode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#idle_mode FgsFunctionV2#idle_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.tacticsConfig">TacticsConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a></code> | tactics_config block. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#count FgsFunctionV2#count}.

---

##### `QualifierName`<sup>Required</sup> <a name="QualifierName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierName"></a>

```csharp
public string QualifierName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#qualifier_name FgsFunctionV2#qualifier_name}.

---

##### `QualifierType`<sup>Required</sup> <a name="QualifierType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierType"></a>

```csharp
public string QualifierType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#qualifier_type FgsFunctionV2#qualifier_type}.

---

##### `IdleMode`<sup>Optional</sup> <a name="IdleMode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.idleMode"></a>

```csharp
public bool|IResolvable IdleMode { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#idle_mode FgsFunctionV2#idle_mode}.

---

##### `TacticsConfig`<sup>Optional</sup> <a name="TacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.tacticsConfig"></a>

```csharp
public FgsFunctionV2ReservedInstancesTacticsConfig TacticsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

tactics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#tactics_config FgsFunctionV2#tactics_config}

---

### FgsFunctionV2ReservedInstancesTacticsConfig <a name="FgsFunctionV2ReservedInstancesTacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2ReservedInstancesTacticsConfig {
    IResolvable|FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs[] CronConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig.property.cronConfigs">CronConfigs</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]</code> | cron_configs block. |

---

##### `CronConfigs`<sup>Optional</sup> <a name="CronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig.property.cronConfigs"></a>

```csharp
public IResolvable|FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs[] CronConfigs { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]

cron_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#cron_configs FgsFunctionV2#cron_configs}

---

### FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs <a name="FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs {
    double Count,
    string Cron,
    double ExpiredTime,
    string Name,
    double StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#count FgsFunctionV2#count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.cron">Cron</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#cron FgsFunctionV2#cron}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.expiredTime">ExpiredTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#expired_time FgsFunctionV2#expired_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.startTime">StartTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#start_time FgsFunctionV2#start_time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#count FgsFunctionV2#count}.

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.cron"></a>

```csharp
public string Cron { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#cron FgsFunctionV2#cron}.

---

##### `ExpiredTime`<sup>Required</sup> <a name="ExpiredTime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.expiredTime"></a>

```csharp
public double ExpiredTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#expired_time FgsFunctionV2#expired_time}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.startTime"></a>

```csharp
public double StartTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#start_time FgsFunctionV2#start_time}.

---

### FgsFunctionV2Timeouts <a name="FgsFunctionV2Timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#create FgsFunctionV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#delete FgsFunctionV2#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#create FgsFunctionV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#delete FgsFunctionV2#delete}.

---

### FgsFunctionV2Versions <a name="FgsFunctionV2Versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2Versions {
    string Name,
    FgsFunctionV2VersionsAliases Aliases = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.aliases">Aliases</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a></code> | aliases block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#description FgsFunctionV2#description}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.aliases"></a>

```csharp
public FgsFunctionV2VersionsAliases Aliases { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

aliases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#aliases FgsFunctionV2#aliases}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

### FgsFunctionV2VersionsAliases <a name="FgsFunctionV2VersionsAliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2VersionsAliases {
    string Name,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#description FgsFunctionV2#description}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### FgsFunctionV2CustomImageOutputReference <a name="FgsFunctionV2CustomImageOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2CustomImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetUserGroupId">ResetUserGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetUserGroupId` <a name="ResetUserGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetUserGroupId"></a>

```csharp
private void ResetUserGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetWorkingDir"></a>

```csharp
private void ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.argsInput">ArgsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.commandInput">CommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userGroupIdInput">UserGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.args">Args</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.command">Command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userGroupId">UserGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDir">WorkingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.argsInput"></a>

```csharp
public string ArgsInput { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.commandInput"></a>

```csharp
public string CommandInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserGroupIdInput`<sup>Optional</sup> <a name="UserGroupIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userGroupIdInput"></a>

```csharp
public string UserGroupIdInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDirInput"></a>

```csharp
public string WorkingDirInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.args"></a>

```csharp
public string Args { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.command"></a>

```csharp
public string Command { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserGroupId`<sup>Required</sup> <a name="UserGroupId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userGroupId"></a>

```csharp
public string UserGroupId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDir"></a>

```csharp
public string WorkingDir { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.internalValue"></a>

```csharp
public FgsFunctionV2CustomImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

---


### FgsFunctionV2FuncMountsList <a name="FgsFunctionV2FuncMountsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2FuncMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.get"></a>

```csharp
private FgsFunctionV2FuncMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2FuncMounts[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>[]

---


### FgsFunctionV2FuncMountsOutputReference <a name="FgsFunctionV2FuncMountsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2FuncMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPathInput">LocalMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResourceInput">MountResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePathInput">MountSharePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountTypeInput">MountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPath">LocalMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResource">MountResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePath">MountSharePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountType">MountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalMountPathInput`<sup>Optional</sup> <a name="LocalMountPathInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPathInput"></a>

```csharp
public string LocalMountPathInput { get; }
```

- *Type:* string

---

##### `MountResourceInput`<sup>Optional</sup> <a name="MountResourceInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResourceInput"></a>

```csharp
public string MountResourceInput { get; }
```

- *Type:* string

---

##### `MountSharePathInput`<sup>Optional</sup> <a name="MountSharePathInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePathInput"></a>

```csharp
public string MountSharePathInput { get; }
```

- *Type:* string

---

##### `MountTypeInput`<sup>Optional</sup> <a name="MountTypeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountTypeInput"></a>

```csharp
public string MountTypeInput { get; }
```

- *Type:* string

---

##### `LocalMountPath`<sup>Required</sup> <a name="LocalMountPath" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPath"></a>

```csharp
public string LocalMountPath { get; }
```

- *Type:* string

---

##### `MountResource`<sup>Required</sup> <a name="MountResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResource"></a>

```csharp
public string MountResource { get; }
```

- *Type:* string

---

##### `MountSharePath`<sup>Required</sup> <a name="MountSharePath" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePath"></a>

```csharp
public string MountSharePath { get; }
```

- *Type:* string

---

##### `MountType`<sup>Required</sup> <a name="MountType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountType"></a>

```csharp
public string MountType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2FuncMounts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>

---


### FgsFunctionV2NetworkControllerOutputReference <a name="FgsFunctionV2NetworkControllerOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2NetworkControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.putTriggerAccessVpcs">PutTriggerAccessVpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetDisablePublicNetwork">ResetDisablePublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetTriggerAccessVpcs">ResetTriggerAccessVpcs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerAccessVpcs` <a name="PutTriggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.putTriggerAccessVpcs"></a>

```csharp
private void PutTriggerAccessVpcs(IResolvable|FgsFunctionV2NetworkControllerTriggerAccessVpcs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.putTriggerAccessVpcs.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]

---

##### `ResetDisablePublicNetwork` <a name="ResetDisablePublicNetwork" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetDisablePublicNetwork"></a>

```csharp
private void ResetDisablePublicNetwork()
```

##### `ResetTriggerAccessVpcs` <a name="ResetTriggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetTriggerAccessVpcs"></a>

```csharp
private void ResetTriggerAccessVpcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcs">TriggerAccessVpcs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList">FgsFunctionV2NetworkControllerTriggerAccessVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetworkInput">DisablePublicNetworkInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcsInput">TriggerAccessVpcsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetwork">DisablePublicNetwork</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TriggerAccessVpcs`<sup>Required</sup> <a name="TriggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcs"></a>

```csharp
public FgsFunctionV2NetworkControllerTriggerAccessVpcsList TriggerAccessVpcs { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList">FgsFunctionV2NetworkControllerTriggerAccessVpcsList</a>

---

##### `DisablePublicNetworkInput`<sup>Optional</sup> <a name="DisablePublicNetworkInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetworkInput"></a>

```csharp
public bool|IResolvable DisablePublicNetworkInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TriggerAccessVpcsInput`<sup>Optional</sup> <a name="TriggerAccessVpcsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcsInput"></a>

```csharp
public IResolvable|FgsFunctionV2NetworkControllerTriggerAccessVpcs[] TriggerAccessVpcsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]

---

##### `DisablePublicNetwork`<sup>Required</sup> <a name="DisablePublicNetwork" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetwork"></a>

```csharp
public bool|IResolvable DisablePublicNetwork { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.internalValue"></a>

```csharp
public FgsFunctionV2NetworkController InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

---


### FgsFunctionV2NetworkControllerTriggerAccessVpcsList <a name="FgsFunctionV2NetworkControllerTriggerAccessVpcsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2NetworkControllerTriggerAccessVpcsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.get"></a>

```csharp
private FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2NetworkControllerTriggerAccessVpcs[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>[]

---


### FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference <a name="FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcName">ResetVpcName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

##### `ResetVpcName` <a name="ResetVpcName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcName"></a>

```csharp
private void ResetVpcName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcNameInput">VpcNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcName">VpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `VpcNameInput`<sup>Optional</sup> <a name="VpcNameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcNameInput"></a>

```csharp
public string VpcNameInput { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `VpcName`<sup>Required</sup> <a name="VpcName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcName"></a>

```csharp
public string VpcName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2NetworkControllerTriggerAccessVpcs InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>

---


### FgsFunctionV2ReservedInstancesList <a name="FgsFunctionV2ReservedInstancesList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2ReservedInstancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.get"></a>

```csharp
private FgsFunctionV2ReservedInstancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2ReservedInstances[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>[]

---


### FgsFunctionV2ReservedInstancesOutputReference <a name="FgsFunctionV2ReservedInstancesOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2ReservedInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.putTacticsConfig">PutTacticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetIdleMode">ResetIdleMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetTacticsConfig">ResetTacticsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTacticsConfig` <a name="PutTacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.putTacticsConfig"></a>

```csharp
private void PutTacticsConfig(FgsFunctionV2ReservedInstancesTacticsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.putTacticsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

---

##### `ResetIdleMode` <a name="ResetIdleMode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetIdleMode"></a>

```csharp
private void ResetIdleMode()
```

##### `ResetTacticsConfig` <a name="ResetTacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetTacticsConfig"></a>

```csharp
private void ResetTacticsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfig">TacticsConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference">FgsFunctionV2ReservedInstancesTacticsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleModeInput">IdleModeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierNameInput">QualifierNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierTypeInput">QualifierTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfigInput">TacticsConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleMode">IdleMode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierName">QualifierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierType">QualifierType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TacticsConfig`<sup>Required</sup> <a name="TacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfig"></a>

```csharp
public FgsFunctionV2ReservedInstancesTacticsConfigOutputReference TacticsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference">FgsFunctionV2ReservedInstancesTacticsConfigOutputReference</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IdleModeInput`<sup>Optional</sup> <a name="IdleModeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleModeInput"></a>

```csharp
public bool|IResolvable IdleModeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `QualifierNameInput`<sup>Optional</sup> <a name="QualifierNameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierNameInput"></a>

```csharp
public string QualifierNameInput { get; }
```

- *Type:* string

---

##### `QualifierTypeInput`<sup>Optional</sup> <a name="QualifierTypeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierTypeInput"></a>

```csharp
public string QualifierTypeInput { get; }
```

- *Type:* string

---

##### `TacticsConfigInput`<sup>Optional</sup> <a name="TacticsConfigInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfigInput"></a>

```csharp
public FgsFunctionV2ReservedInstancesTacticsConfig TacticsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `IdleMode`<sup>Required</sup> <a name="IdleMode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleMode"></a>

```csharp
public bool|IResolvable IdleMode { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `QualifierName`<sup>Required</sup> <a name="QualifierName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierName"></a>

```csharp
public string QualifierName { get; }
```

- *Type:* string

---

##### `QualifierType`<sup>Required</sup> <a name="QualifierType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierType"></a>

```csharp
public string QualifierType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2ReservedInstances InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>

---


### FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList <a name="FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.get"></a>

```csharp
private FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]

---


### FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference <a name="FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cronInput">CronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTimeInput">ExpiredTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cron">Cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTime">ExpiredTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cronInput"></a>

```csharp
public string CronInput { get; }
```

- *Type:* string

---

##### `ExpiredTimeInput`<sup>Optional</sup> <a name="ExpiredTimeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTimeInput"></a>

```csharp
public double ExpiredTimeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTimeInput"></a>

```csharp
public double StartTimeInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cron"></a>

```csharp
public string Cron { get; }
```

- *Type:* string

---

##### `ExpiredTime`<sup>Required</sup> <a name="ExpiredTime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTime"></a>

```csharp
public double ExpiredTime { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>

---


### FgsFunctionV2ReservedInstancesTacticsConfigOutputReference <a name="FgsFunctionV2ReservedInstancesTacticsConfigOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2ReservedInstancesTacticsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.putCronConfigs">PutCronConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resetCronConfigs">ResetCronConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCronConfigs` <a name="PutCronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.putCronConfigs"></a>

```csharp
private void PutCronConfigs(IResolvable|FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.putCronConfigs.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]

---

##### `ResetCronConfigs` <a name="ResetCronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resetCronConfigs"></a>

```csharp
private void ResetCronConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigs">CronConfigs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigsInput">CronConfigsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronConfigs`<sup>Required</sup> <a name="CronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigs"></a>

```csharp
public FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList CronConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList</a>

---

##### `CronConfigsInput`<sup>Optional</sup> <a name="CronConfigsInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigsInput"></a>

```csharp
public IResolvable|FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs[] CronConfigsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.internalValue"></a>

```csharp
public FgsFunctionV2ReservedInstancesTacticsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

---


### FgsFunctionV2TimeoutsOutputReference <a name="FgsFunctionV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

---


### FgsFunctionV2VersionsAliasesOutputReference <a name="FgsFunctionV2VersionsAliasesOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2VersionsAliasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.internalValue"></a>

```csharp
public FgsFunctionV2VersionsAliases InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

---


### FgsFunctionV2VersionsList <a name="FgsFunctionV2VersionsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2VersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.get"></a>

```csharp
private FgsFunctionV2VersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2Versions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>[]

---


### FgsFunctionV2VersionsOutputReference <a name="FgsFunctionV2VersionsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new FgsFunctionV2VersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases">PutAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAliases` <a name="PutAliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases"></a>

```csharp
private void PutAliases(FgsFunctionV2VersionsAliases Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

---

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetAliases"></a>

```csharp
private void ResetAliases()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliases">Aliases</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference">FgsFunctionV2VersionsAliasesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliasesInput">AliasesInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliases"></a>

```csharp
public FgsFunctionV2VersionsAliasesOutputReference Aliases { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference">FgsFunctionV2VersionsAliasesOutputReference</a>

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliasesInput"></a>

```csharp
public FgsFunctionV2VersionsAliases AliasesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FgsFunctionV2Versions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>

---



