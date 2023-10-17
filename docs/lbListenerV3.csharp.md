# `opentelekomcloud_lb_listener_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_lb_listener_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3).

# `lbListenerV3` Submodule <a name="`lbListenerV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbListenerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerV3 <a name="LbListenerV3" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3 opentelekomcloud_lb_listener_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbListenerV3(Construct Scope, string Id, LbListenerV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config">LbListenerV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config">LbListenerV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders">PutInsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup">PutIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding">ResetAdvancedForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef">ResetClientCaTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout">ResetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId">ResetDefaultPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef">ResetDefaultTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable">ResetHttp2Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders">ResetInsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup">ResetIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout">ResetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable">ResetMemberRetryEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout">ResetMemberTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId">ResetSecurityPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs">ResetSniContainerRefs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo">ResetSniMatchAlgo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy">ResetTlsCiphersPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutInsertHeaders` <a name="PutInsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders"></a>

```csharp
private void PutInsertHeaders(LbListenerV3InsertHeaders Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---

##### `PutIpGroup` <a name="PutIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup"></a>

```csharp
private void PutIpGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup.parameter.value"></a>

- *Type:* object

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp"></a>

```csharp
private void ResetAdminStateUp()
```

##### `ResetAdvancedForwarding` <a name="ResetAdvancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding"></a>

```csharp
private void ResetAdvancedForwarding()
```

##### `ResetClientCaTlsContainerRef` <a name="ResetClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef"></a>

```csharp
private void ResetClientCaTlsContainerRef()
```

##### `ResetClientTimeout` <a name="ResetClientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout"></a>

```csharp
private void ResetClientTimeout()
```

##### `ResetDefaultPoolId` <a name="ResetDefaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId"></a>

```csharp
private void ResetDefaultPoolId()
```

##### `ResetDefaultTlsContainerRef` <a name="ResetDefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef"></a>

```csharp
private void ResetDefaultTlsContainerRef()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHttp2Enable` <a name="ResetHttp2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable"></a>

```csharp
private void ResetHttp2Enable()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsertHeaders` <a name="ResetInsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders"></a>

```csharp
private void ResetInsertHeaders()
```

##### `ResetIpGroup` <a name="ResetIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup"></a>

```csharp
private void ResetIpGroup()
```

##### `ResetKeepAliveTimeout` <a name="ResetKeepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout"></a>

```csharp
private void ResetKeepAliveTimeout()
```

##### `ResetMemberRetryEnable` <a name="ResetMemberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable"></a>

```csharp
private void ResetMemberRetryEnable()
```

##### `ResetMemberTimeout` <a name="ResetMemberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout"></a>

```csharp
private void ResetMemberTimeout()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSecurityPolicyId` <a name="ResetSecurityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId"></a>

```csharp
private void ResetSecurityPolicyId()
```

##### `ResetSniContainerRefs` <a name="ResetSniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs"></a>

```csharp
private void ResetSniContainerRefs()
```

##### `ResetSniMatchAlgo` <a name="ResetSniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo"></a>

```csharp
private void ResetSniMatchAlgo()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTlsCiphersPolicy` <a name="ResetTlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy"></a>

```csharp
private void ResetTlsCiphersPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbListenerV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbListenerV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbListenerV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbListenerV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbListenerV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbListenerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LbListenerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders">InsertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup">IpGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList">LbListenerV3IpGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput">AdvancedForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput">ClientCaTlsContainerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput">ClientTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput">DefaultPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput">DefaultTlsContainerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput">Http2EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput">InsertHeadersInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput">IpGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput">KeepAliveTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput">LoadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput">MemberRetryEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput">MemberTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput">ProtocolPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput">SecurityPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput">SniContainerRefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput">SniMatchAlgoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput">TlsCiphersPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding">AdvancedForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef">ClientCaTlsContainerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout">ClientTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId">DefaultPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef">DefaultTlsContainerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable">Http2Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId">LoadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable">MemberRetryEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout">MemberTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort">ProtocolPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs">SniContainerRefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo">SniMatchAlgo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy">TlsCiphersPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `InsertHeaders`<sup>Required</sup> <a name="InsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders"></a>

```csharp
public LbListenerV3InsertHeadersOutputReference InsertHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a>

---

##### `IpGroup`<sup>Required</sup> <a name="IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup"></a>

```csharp
public LbListenerV3IpGroupList IpGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList">LbListenerV3IpGroupList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput"></a>

```csharp
public object AdminStateUpInput { get; }
```

- *Type:* object

---

##### `AdvancedForwardingInput`<sup>Optional</sup> <a name="AdvancedForwardingInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput"></a>

```csharp
public object AdvancedForwardingInput { get; }
```

- *Type:* object

---

##### `ClientCaTlsContainerRefInput`<sup>Optional</sup> <a name="ClientCaTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput"></a>

```csharp
public string ClientCaTlsContainerRefInput { get; }
```

- *Type:* string

---

##### `ClientTimeoutInput`<sup>Optional</sup> <a name="ClientTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput"></a>

```csharp
public double ClientTimeoutInput { get; }
```

- *Type:* double

---

##### `DefaultPoolIdInput`<sup>Optional</sup> <a name="DefaultPoolIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput"></a>

```csharp
public string DefaultPoolIdInput { get; }
```

- *Type:* string

---

##### `DefaultTlsContainerRefInput`<sup>Optional</sup> <a name="DefaultTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput"></a>

```csharp
public string DefaultTlsContainerRefInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Http2EnableInput`<sup>Optional</sup> <a name="Http2EnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput"></a>

```csharp
public object Http2EnableInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsertHeadersInput`<sup>Optional</sup> <a name="InsertHeadersInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput"></a>

```csharp
public LbListenerV3InsertHeaders InsertHeadersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---

##### `IpGroupInput`<sup>Optional</sup> <a name="IpGroupInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput"></a>

```csharp
public object IpGroupInput { get; }
```

- *Type:* object

---

##### `KeepAliveTimeoutInput`<sup>Optional</sup> <a name="KeepAliveTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput"></a>

```csharp
public double KeepAliveTimeoutInput { get; }
```

- *Type:* double

---

##### `LoadbalancerIdInput`<sup>Optional</sup> <a name="LoadbalancerIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput"></a>

```csharp
public string LoadbalancerIdInput { get; }
```

- *Type:* string

---

##### `MemberRetryEnableInput`<sup>Optional</sup> <a name="MemberRetryEnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput"></a>

```csharp
public object MemberRetryEnableInput { get; }
```

- *Type:* object

---

##### `MemberTimeoutInput`<sup>Optional</sup> <a name="MemberTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput"></a>

```csharp
public double MemberTimeoutInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ProtocolPortInput`<sup>Optional</sup> <a name="ProtocolPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput"></a>

```csharp
public double ProtocolPortInput { get; }
```

- *Type:* double

---

##### `SecurityPolicyIdInput`<sup>Optional</sup> <a name="SecurityPolicyIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput"></a>

```csharp
public string SecurityPolicyIdInput { get; }
```

- *Type:* string

---

##### `SniContainerRefsInput`<sup>Optional</sup> <a name="SniContainerRefsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput"></a>

```csharp
public string[] SniContainerRefsInput { get; }
```

- *Type:* string[]

---

##### `SniMatchAlgoInput`<sup>Optional</sup> <a name="SniMatchAlgoInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput"></a>

```csharp
public string SniMatchAlgoInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TlsCiphersPolicyInput`<sup>Optional</sup> <a name="TlsCiphersPolicyInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput"></a>

```csharp
public string TlsCiphersPolicyInput { get; }
```

- *Type:* string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; }
```

- *Type:* object

---

##### `AdvancedForwarding`<sup>Required</sup> <a name="AdvancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding"></a>

```csharp
public object AdvancedForwarding { get; }
```

- *Type:* object

---

##### `ClientCaTlsContainerRef`<sup>Required</sup> <a name="ClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef"></a>

```csharp
public string ClientCaTlsContainerRef { get; }
```

- *Type:* string

---

##### `ClientTimeout`<sup>Required</sup> <a name="ClientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout"></a>

```csharp
public double ClientTimeout { get; }
```

- *Type:* double

---

##### `DefaultPoolId`<sup>Required</sup> <a name="DefaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId"></a>

```csharp
public string DefaultPoolId { get; }
```

- *Type:* string

---

##### `DefaultTlsContainerRef`<sup>Required</sup> <a name="DefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef"></a>

```csharp
public string DefaultTlsContainerRef { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Http2Enable`<sup>Required</sup> <a name="Http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable"></a>

```csharp
public object Http2Enable { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeepAliveTimeout`<sup>Required</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout"></a>

```csharp
public double KeepAliveTimeout { get; }
```

- *Type:* double

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId"></a>

```csharp
public string LoadbalancerId { get; }
```

- *Type:* string

---

##### `MemberRetryEnable`<sup>Required</sup> <a name="MemberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable"></a>

```csharp
public object MemberRetryEnable { get; }
```

- *Type:* object

---

##### `MemberTimeout`<sup>Required</sup> <a name="MemberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout"></a>

```csharp
public double MemberTimeout { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ProtocolPort`<sup>Required</sup> <a name="ProtocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort"></a>

```csharp
public double ProtocolPort { get; }
```

- *Type:* double

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; }
```

- *Type:* string

---

##### `SniContainerRefs`<sup>Required</sup> <a name="SniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs"></a>

```csharp
public string[] SniContainerRefs { get; }
```

- *Type:* string[]

---

##### `SniMatchAlgo`<sup>Required</sup> <a name="SniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo"></a>

```csharp
public string SniMatchAlgo { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TlsCiphersPolicy`<sup>Required</sup> <a name="TlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy"></a>

```csharp
public string TlsCiphersPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerV3Config <a name="LbListenerV3Config" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbListenerV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LoadbalancerId,
    string Protocol,
    double ProtocolPort,
    object AdminStateUp = null,
    object AdvancedForwarding = null,
    string ClientCaTlsContainerRef = null,
    double ClientTimeout = null,
    string DefaultPoolId = null,
    string DefaultTlsContainerRef = null,
    string Description = null,
    object Http2Enable = null,
    string Id = null,
    LbListenerV3InsertHeaders InsertHeaders = null,
    object IpGroup = null,
    double KeepAliveTimeout = null,
    object MemberRetryEnable = null,
    double MemberTimeout = null,
    string Name = null,
    string SecurityPolicyId = null,
    string[] SniContainerRefs = null,
    string SniMatchAlgo = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TlsCiphersPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId">LoadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort">ProtocolPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding">AdvancedForwarding</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef">ClientCaTlsContainerRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout">ClientTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId">DefaultPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef">DefaultTlsContainerRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#description LbListenerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable">Http2Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders">InsertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | insert_headers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup">IpGroup</a></code> | <code>object</code> | ip_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable">MemberRetryEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout">MemberTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#name LbListenerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs">SniContainerRefs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo">SniMatchAlgo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#tags LbListenerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy">TlsCiphersPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId"></a>

```csharp
public string LoadbalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}.

---

##### `ProtocolPort`<sup>Required</sup> <a name="ProtocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort"></a>

```csharp
public double ProtocolPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}.

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}.

---

##### `AdvancedForwarding`<sup>Optional</sup> <a name="AdvancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding"></a>

```csharp
public object AdvancedForwarding { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}.

---

##### `ClientCaTlsContainerRef`<sup>Optional</sup> <a name="ClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef"></a>

```csharp
public string ClientCaTlsContainerRef { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}.

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout"></a>

```csharp
public double ClientTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}.

---

##### `DefaultPoolId`<sup>Optional</sup> <a name="DefaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId"></a>

```csharp
public string DefaultPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}.

---

##### `DefaultTlsContainerRef`<sup>Optional</sup> <a name="DefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef"></a>

```csharp
public string DefaultTlsContainerRef { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#description LbListenerV3#description}.

---

##### `Http2Enable`<sup>Optional</sup> <a name="Http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable"></a>

```csharp
public object Http2Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsertHeaders`<sup>Optional</sup> <a name="InsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders"></a>

```csharp
public LbListenerV3InsertHeaders InsertHeaders { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

insert_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#insert_headers LbListenerV3#insert_headers}

---

##### `IpGroup`<sup>Optional</sup> <a name="IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup"></a>

```csharp
public object IpGroup { get; set; }
```

- *Type:* object

ip_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#ip_group LbListenerV3#ip_group}

---

##### `KeepAliveTimeout`<sup>Optional</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout"></a>

```csharp
public double KeepAliveTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}.

---

##### `MemberRetryEnable`<sup>Optional</sup> <a name="MemberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable"></a>

```csharp
public object MemberRetryEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}.

---

##### `MemberTimeout`<sup>Optional</sup> <a name="MemberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout"></a>

```csharp
public double MemberTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#name LbListenerV3#name}.

---

##### `SecurityPolicyId`<sup>Optional</sup> <a name="SecurityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}.

---

##### `SniContainerRefs`<sup>Optional</sup> <a name="SniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs"></a>

```csharp
public string[] SniContainerRefs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}.

---

##### `SniMatchAlgo`<sup>Optional</sup> <a name="SniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo"></a>

```csharp
public string SniMatchAlgo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#tags LbListenerV3#tags}.

---

##### `TlsCiphersPolicy`<sup>Optional</sup> <a name="TlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy"></a>

```csharp
public string TlsCiphersPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}.

---

### LbListenerV3InsertHeaders <a name="LbListenerV3InsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbListenerV3InsertHeaders {
    object ForwardedForPort = null,
    object ForwardedHost = null,
    object ForwardedPort = null,
    object ForwardElbIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort">ForwardedForPort</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost">ForwardedHost</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort">ForwardedPort</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp">ForwardElbIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}. |

---

##### `ForwardedForPort`<sup>Optional</sup> <a name="ForwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort"></a>

```csharp
public object ForwardedForPort { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}.

---

##### `ForwardedHost`<sup>Optional</sup> <a name="ForwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost"></a>

```csharp
public object ForwardedHost { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}.

---

##### `ForwardedPort`<sup>Optional</sup> <a name="ForwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort"></a>

```csharp
public object ForwardedPort { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}.

---

##### `ForwardElbIp`<sup>Optional</sup> <a name="ForwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp"></a>

```csharp
public object ForwardElbIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}.

---

### LbListenerV3IpGroup <a name="LbListenerV3IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbListenerV3IpGroup {
    string Id,
    object Enable = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#enable LbListenerV3#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#type LbListenerV3#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#enable LbListenerV3#enable}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/lb_listener_v3#type LbListenerV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerV3InsertHeadersOutputReference <a name="LbListenerV3InsertHeadersOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbListenerV3InsertHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort">ResetForwardedForPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost">ResetForwardedHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort">ResetForwardedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp">ResetForwardElbIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardedForPort` <a name="ResetForwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort"></a>

```csharp
private void ResetForwardedForPort()
```

##### `ResetForwardedHost` <a name="ResetForwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost"></a>

```csharp
private void ResetForwardedHost()
```

##### `ResetForwardedPort` <a name="ResetForwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort"></a>

```csharp
private void ResetForwardedPort()
```

##### `ResetForwardElbIp` <a name="ResetForwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp"></a>

```csharp
private void ResetForwardElbIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput">ForwardedForPortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput">ForwardedHostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput">ForwardedPortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput">ForwardElbIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort">ForwardedForPort</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost">ForwardedHost</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort">ForwardedPort</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp">ForwardElbIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardedForPortInput`<sup>Optional</sup> <a name="ForwardedForPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput"></a>

```csharp
public object ForwardedForPortInput { get; }
```

- *Type:* object

---

##### `ForwardedHostInput`<sup>Optional</sup> <a name="ForwardedHostInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput"></a>

```csharp
public object ForwardedHostInput { get; }
```

- *Type:* object

---

##### `ForwardedPortInput`<sup>Optional</sup> <a name="ForwardedPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput"></a>

```csharp
public object ForwardedPortInput { get; }
```

- *Type:* object

---

##### `ForwardElbIpInput`<sup>Optional</sup> <a name="ForwardElbIpInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput"></a>

```csharp
public object ForwardElbIpInput { get; }
```

- *Type:* object

---

##### `ForwardedForPort`<sup>Required</sup> <a name="ForwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort"></a>

```csharp
public object ForwardedForPort { get; }
```

- *Type:* object

---

##### `ForwardedHost`<sup>Required</sup> <a name="ForwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost"></a>

```csharp
public object ForwardedHost { get; }
```

- *Type:* object

---

##### `ForwardedPort`<sup>Required</sup> <a name="ForwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort"></a>

```csharp
public object ForwardedPort { get; }
```

- *Type:* object

---

##### `ForwardElbIp`<sup>Required</sup> <a name="ForwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp"></a>

```csharp
public object ForwardElbIp { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue"></a>

```csharp
public LbListenerV3InsertHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---


### LbListenerV3IpGroupList <a name="LbListenerV3IpGroupList" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbListenerV3IpGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.get"></a>

```csharp
private LbListenerV3IpGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbListenerV3IpGroupOutputReference <a name="LbListenerV3IpGroupOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbListenerV3IpGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



