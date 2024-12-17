# `cceClusterV3` Submodule <a name="`cceClusterV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceClusterV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceClusterV3 <a name="CceClusterV3" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3 opentelekomcloud_cce_cluster_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3(Construct Scope, string Id, CceClusterV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config">CceClusterV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config">CceClusterV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy">PutAuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxy">ResetAuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxyCa">ResetAuthenticatingProxyCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetBillingMode">ResetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetClusterVersion">ResetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetContainerNetworkCidr">ResetContainerNetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllNetwork">ResetDeleteAllNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllStorage">ResetDeleteAllStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEfs">ResetDeleteEfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEni">ResetDeleteEni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEvs">ResetDeleteEvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteNet">ResetDeleteNet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteObs">ResetDeleteObs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteSfs">ResetDeleteSfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEip">ResetEip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEnableVolumeEncryption">ResetEnableVolumeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetCidr">ResetEniSubnetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetId">ResetEniSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetExtendParam">ResetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetHighwaySubnetId">ResetHighwaySubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreAddons">ResetIgnoreAddons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateClustersData">ResetIgnoreCertificateClustersData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateUsersData">ResetIgnoreCertificateUsersData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubeProxyMode">ResetKubeProxyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubernetesSvcIpRange">ResetKubernetesSvcIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetNoAddons">ResetNoAddons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticatingProxy` <a name="PutAuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy"></a>

```csharp
private void PutAuthenticatingProxy(CceClusterV3AuthenticatingProxy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts"></a>

```csharp
private void PutTimeouts(CceClusterV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAuthenticatingProxy` <a name="ResetAuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxy"></a>

```csharp
private void ResetAuthenticatingProxy()
```

##### `ResetAuthenticatingProxyCa` <a name="ResetAuthenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxyCa"></a>

```csharp
private void ResetAuthenticatingProxyCa()
```

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticationMode"></a>

```csharp
private void ResetAuthenticationMode()
```

##### `ResetBillingMode` <a name="ResetBillingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetBillingMode"></a>

```csharp
private void ResetBillingMode()
```

##### `ResetClusterVersion` <a name="ResetClusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetClusterVersion"></a>

```csharp
private void ResetClusterVersion()
```

##### `ResetContainerNetworkCidr` <a name="ResetContainerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetContainerNetworkCidr"></a>

```csharp
private void ResetContainerNetworkCidr()
```

##### `ResetDeleteAllNetwork` <a name="ResetDeleteAllNetwork" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllNetwork"></a>

```csharp
private void ResetDeleteAllNetwork()
```

##### `ResetDeleteAllStorage` <a name="ResetDeleteAllStorage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllStorage"></a>

```csharp
private void ResetDeleteAllStorage()
```

##### `ResetDeleteEfs` <a name="ResetDeleteEfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEfs"></a>

```csharp
private void ResetDeleteEfs()
```

##### `ResetDeleteEni` <a name="ResetDeleteEni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEni"></a>

```csharp
private void ResetDeleteEni()
```

##### `ResetDeleteEvs` <a name="ResetDeleteEvs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEvs"></a>

```csharp
private void ResetDeleteEvs()
```

##### `ResetDeleteNet` <a name="ResetDeleteNet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteNet"></a>

```csharp
private void ResetDeleteNet()
```

##### `ResetDeleteObs` <a name="ResetDeleteObs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteObs"></a>

```csharp
private void ResetDeleteObs()
```

##### `ResetDeleteSfs` <a name="ResetDeleteSfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteSfs"></a>

```csharp
private void ResetDeleteSfs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEip` <a name="ResetEip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEip"></a>

```csharp
private void ResetEip()
```

##### `ResetEnableVolumeEncryption` <a name="ResetEnableVolumeEncryption" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEnableVolumeEncryption"></a>

```csharp
private void ResetEnableVolumeEncryption()
```

##### `ResetEniSubnetCidr` <a name="ResetEniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetCidr"></a>

```csharp
private void ResetEniSubnetCidr()
```

##### `ResetEniSubnetId` <a name="ResetEniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetId"></a>

```csharp
private void ResetEniSubnetId()
```

##### `ResetExtendParam` <a name="ResetExtendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetExtendParam"></a>

```csharp
private void ResetExtendParam()
```

##### `ResetHighwaySubnetId` <a name="ResetHighwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetHighwaySubnetId"></a>

```csharp
private void ResetHighwaySubnetId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreAddons` <a name="ResetIgnoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreAddons"></a>

```csharp
private void ResetIgnoreAddons()
```

##### `ResetIgnoreCertificateClustersData` <a name="ResetIgnoreCertificateClustersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateClustersData"></a>

```csharp
private void ResetIgnoreCertificateClustersData()
```

##### `ResetIgnoreCertificateUsersData` <a name="ResetIgnoreCertificateUsersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateUsersData"></a>

```csharp
private void ResetIgnoreCertificateUsersData()
```

##### `ResetKubeProxyMode` <a name="ResetKubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubeProxyMode"></a>

```csharp
private void ResetKubeProxyMode()
```

##### `ResetKubernetesSvcIpRange` <a name="ResetKubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubernetesSvcIpRange"></a>

```csharp
private void ResetKubernetesSvcIpRange()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMultiAz"></a>

```csharp
private void ResetMultiAz()
```

##### `ResetNoAddons` <a name="ResetNoAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetNoAddons"></a>

```csharp
private void ResetNoAddons()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetSecurityGroupId"></a>

```csharp
private void ResetSecurityGroupId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CceClusterV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CceClusterV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CceClusterV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CceClusterV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CceClusterV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CceClusterV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CceClusterV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CceClusterV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CceClusterV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxy">AuthenticatingProxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference">CceClusterV3AuthenticatingProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateClusters">CertificateClusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList">CceClusterV3CertificateClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateUsers">CertificateUsers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList">CceClusterV3CertificateUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.external">External</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.externalOtc">ExternalOtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.installedAddons">InstalledAddons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.internal">Internal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupControl">SecurityGroupControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupNode">SecurityGroupNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference">CceClusterV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCaInput">AuthenticatingProxyCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyInput">AuthenticatingProxyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingModeInput">BillingModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidrInput">ContainerNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkTypeInput">ContainerNetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetworkInput">DeleteAllNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorageInput">DeleteAllStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfsInput">DeleteEfsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEniInput">DeleteEniInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvsInput">DeleteEvsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNetInput">DeleteNetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObsInput">DeleteObsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfsInput">DeleteSfsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eipInput">EipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.enableVolumeEncryptionInput">EnableVolumeEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidrInput">EniSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetIdInput">EniSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParamInput">ExtendParamInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorIdInput">FlavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetIdInput">HighwaySubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddonsInput">IgnoreAddonsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersDataInput">IgnoreCertificateClustersDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersDataInput">IgnoreCertificateUsersDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyModeInput">KubeProxyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRangeInput">KubernetesSvcIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAzInput">MultiAzInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddonsInput">NoAddonsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCa">AuthenticatingProxyCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingMode">BillingMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterType">ClusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidr">ContainerNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkType">ContainerNetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetwork">DeleteAllNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorage">DeleteAllStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfs">DeleteEfs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEni">DeleteEni</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvs">DeleteEvs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNet">DeleteNet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObs">DeleteObs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfs">DeleteSfs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eip">Eip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.enableVolumeEncryption">EnableVolumeEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidr">EniSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetId">EniSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParam">ExtendParam</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorId">FlavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetId">HighwaySubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddons">IgnoreAddons</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersData">IgnoreCertificateClustersData</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersData">IgnoreCertificateUsersData</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyMode">KubeProxyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRange">KubernetesSvcIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAz">MultiAz</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddons">NoAddons</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthenticatingProxy`<sup>Required</sup> <a name="AuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxy"></a>

```csharp
public CceClusterV3AuthenticatingProxyOutputReference AuthenticatingProxy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference">CceClusterV3AuthenticatingProxyOutputReference</a>

---

##### `CertificateClusters`<sup>Required</sup> <a name="CertificateClusters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateClusters"></a>

```csharp
public CceClusterV3CertificateClustersList CertificateClusters { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList">CceClusterV3CertificateClustersList</a>

---

##### `CertificateUsers`<sup>Required</sup> <a name="CertificateUsers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateUsers"></a>

```csharp
public CceClusterV3CertificateUsersList CertificateUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList">CceClusterV3CertificateUsersList</a>

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.external"></a>

```csharp
public string External { get; }
```

- *Type:* string

---

##### `ExternalOtc`<sup>Required</sup> <a name="ExternalOtc" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.externalOtc"></a>

```csharp
public string ExternalOtc { get; }
```

- *Type:* string

---

##### `InstalledAddons`<sup>Required</sup> <a name="InstalledAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.installedAddons"></a>

```csharp
public string[] InstalledAddons { get; }
```

- *Type:* string[]

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.internal"></a>

```csharp
public string Internal { get; }
```

- *Type:* string

---

##### `SecurityGroupControl`<sup>Required</sup> <a name="SecurityGroupControl" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupControl"></a>

```csharp
public string SecurityGroupControl { get; }
```

- *Type:* string

---

##### `SecurityGroupNode`<sup>Required</sup> <a name="SecurityGroupNode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupNode"></a>

```csharp
public string SecurityGroupNode { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeouts"></a>

```csharp
public CceClusterV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference">CceClusterV3TimeoutsOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthenticatingProxyCaInput`<sup>Optional</sup> <a name="AuthenticatingProxyCaInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCaInput"></a>

```csharp
public string AuthenticatingProxyCaInput { get; }
```

- *Type:* string

---

##### `AuthenticatingProxyInput`<sup>Optional</sup> <a name="AuthenticatingProxyInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyInput"></a>

```csharp
public CceClusterV3AuthenticatingProxy AuthenticatingProxyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `BillingModeInput`<sup>Optional</sup> <a name="BillingModeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingModeInput"></a>

```csharp
public double BillingModeInput { get; }
```

- *Type:* double

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterTypeInput"></a>

```csharp
public string ClusterTypeInput { get; }
```

- *Type:* string

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `ContainerNetworkCidrInput`<sup>Optional</sup> <a name="ContainerNetworkCidrInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidrInput"></a>

```csharp
public string ContainerNetworkCidrInput { get; }
```

- *Type:* string

---

##### `ContainerNetworkTypeInput`<sup>Optional</sup> <a name="ContainerNetworkTypeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkTypeInput"></a>

```csharp
public string ContainerNetworkTypeInput { get; }
```

- *Type:* string

---

##### `DeleteAllNetworkInput`<sup>Optional</sup> <a name="DeleteAllNetworkInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetworkInput"></a>

```csharp
public string DeleteAllNetworkInput { get; }
```

- *Type:* string

---

##### `DeleteAllStorageInput`<sup>Optional</sup> <a name="DeleteAllStorageInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorageInput"></a>

```csharp
public string DeleteAllStorageInput { get; }
```

- *Type:* string

---

##### `DeleteEfsInput`<sup>Optional</sup> <a name="DeleteEfsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfsInput"></a>

```csharp
public string DeleteEfsInput { get; }
```

- *Type:* string

---

##### `DeleteEniInput`<sup>Optional</sup> <a name="DeleteEniInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEniInput"></a>

```csharp
public string DeleteEniInput { get; }
```

- *Type:* string

---

##### `DeleteEvsInput`<sup>Optional</sup> <a name="DeleteEvsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvsInput"></a>

```csharp
public string DeleteEvsInput { get; }
```

- *Type:* string

---

##### `DeleteNetInput`<sup>Optional</sup> <a name="DeleteNetInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNetInput"></a>

```csharp
public string DeleteNetInput { get; }
```

- *Type:* string

---

##### `DeleteObsInput`<sup>Optional</sup> <a name="DeleteObsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObsInput"></a>

```csharp
public string DeleteObsInput { get; }
```

- *Type:* string

---

##### `DeleteSfsInput`<sup>Optional</sup> <a name="DeleteSfsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfsInput"></a>

```csharp
public string DeleteSfsInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EipInput`<sup>Optional</sup> <a name="EipInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eipInput"></a>

```csharp
public string EipInput { get; }
```

- *Type:* string

---

##### `EnableVolumeEncryptionInput`<sup>Optional</sup> <a name="EnableVolumeEncryptionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.enableVolumeEncryptionInput"></a>

```csharp
public object EnableVolumeEncryptionInput { get; }
```

- *Type:* object

---

##### `EniSubnetCidrInput`<sup>Optional</sup> <a name="EniSubnetCidrInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidrInput"></a>

```csharp
public string EniSubnetCidrInput { get; }
```

- *Type:* string

---

##### `EniSubnetIdInput`<sup>Optional</sup> <a name="EniSubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetIdInput"></a>

```csharp
public string EniSubnetIdInput { get; }
```

- *Type:* string

---

##### `ExtendParamInput`<sup>Optional</sup> <a name="ExtendParamInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParamInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendParamInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorIdInput"></a>

```csharp
public string FlavorIdInput { get; }
```

- *Type:* string

---

##### `HighwaySubnetIdInput`<sup>Optional</sup> <a name="HighwaySubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetIdInput"></a>

```csharp
public string HighwaySubnetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreAddonsInput`<sup>Optional</sup> <a name="IgnoreAddonsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddonsInput"></a>

```csharp
public object IgnoreAddonsInput { get; }
```

- *Type:* object

---

##### `IgnoreCertificateClustersDataInput`<sup>Optional</sup> <a name="IgnoreCertificateClustersDataInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersDataInput"></a>

```csharp
public object IgnoreCertificateClustersDataInput { get; }
```

- *Type:* object

---

##### `IgnoreCertificateUsersDataInput`<sup>Optional</sup> <a name="IgnoreCertificateUsersDataInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersDataInput"></a>

```csharp
public object IgnoreCertificateUsersDataInput { get; }
```

- *Type:* object

---

##### `KubeProxyModeInput`<sup>Optional</sup> <a name="KubeProxyModeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyModeInput"></a>

```csharp
public string KubeProxyModeInput { get; }
```

- *Type:* string

---

##### `KubernetesSvcIpRangeInput`<sup>Optional</sup> <a name="KubernetesSvcIpRangeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRangeInput"></a>

```csharp
public string KubernetesSvcIpRangeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAzInput"></a>

```csharp
public object MultiAzInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NoAddonsInput`<sup>Optional</sup> <a name="NoAddonsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddonsInput"></a>

```csharp
public object NoAddonsInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthenticatingProxyCa`<sup>Required</sup> <a name="AuthenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCa"></a>

```csharp
public string AuthenticatingProxyCa { get; }
```

- *Type:* string

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingMode"></a>

```csharp
public double BillingMode { get; }
```

- *Type:* double

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterType"></a>

```csharp
public string ClusterType { get; }
```

- *Type:* string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `ContainerNetworkCidr`<sup>Required</sup> <a name="ContainerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidr"></a>

```csharp
public string ContainerNetworkCidr { get; }
```

- *Type:* string

---

##### `ContainerNetworkType`<sup>Required</sup> <a name="ContainerNetworkType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkType"></a>

```csharp
public string ContainerNetworkType { get; }
```

- *Type:* string

---

##### `DeleteAllNetwork`<sup>Required</sup> <a name="DeleteAllNetwork" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetwork"></a>

```csharp
public string DeleteAllNetwork { get; }
```

- *Type:* string

---

##### `DeleteAllStorage`<sup>Required</sup> <a name="DeleteAllStorage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorage"></a>

```csharp
public string DeleteAllStorage { get; }
```

- *Type:* string

---

##### `DeleteEfs`<sup>Required</sup> <a name="DeleteEfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfs"></a>

```csharp
public string DeleteEfs { get; }
```

- *Type:* string

---

##### `DeleteEni`<sup>Required</sup> <a name="DeleteEni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEni"></a>

```csharp
public string DeleteEni { get; }
```

- *Type:* string

---

##### `DeleteEvs`<sup>Required</sup> <a name="DeleteEvs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvs"></a>

```csharp
public string DeleteEvs { get; }
```

- *Type:* string

---

##### `DeleteNet`<sup>Required</sup> <a name="DeleteNet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNet"></a>

```csharp
public string DeleteNet { get; }
```

- *Type:* string

---

##### `DeleteObs`<sup>Required</sup> <a name="DeleteObs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObs"></a>

```csharp
public string DeleteObs { get; }
```

- *Type:* string

---

##### `DeleteSfs`<sup>Required</sup> <a name="DeleteSfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfs"></a>

```csharp
public string DeleteSfs { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Eip`<sup>Required</sup> <a name="Eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eip"></a>

```csharp
public string Eip { get; }
```

- *Type:* string

---

##### `EnableVolumeEncryption`<sup>Required</sup> <a name="EnableVolumeEncryption" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.enableVolumeEncryption"></a>

```csharp
public object EnableVolumeEncryption { get; }
```

- *Type:* object

---

##### `EniSubnetCidr`<sup>Required</sup> <a name="EniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidr"></a>

```csharp
public string EniSubnetCidr { get; }
```

- *Type:* string

---

##### `EniSubnetId`<sup>Required</sup> <a name="EniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetId"></a>

```csharp
public string EniSubnetId { get; }
```

- *Type:* string

---

##### `ExtendParam`<sup>Required</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParam"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendParam { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorId"></a>

```csharp
public string FlavorId { get; }
```

- *Type:* string

---

##### `HighwaySubnetId`<sup>Required</sup> <a name="HighwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetId"></a>

```csharp
public string HighwaySubnetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreAddons`<sup>Required</sup> <a name="IgnoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddons"></a>

```csharp
public object IgnoreAddons { get; }
```

- *Type:* object

---

##### `IgnoreCertificateClustersData`<sup>Required</sup> <a name="IgnoreCertificateClustersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersData"></a>

```csharp
public object IgnoreCertificateClustersData { get; }
```

- *Type:* object

---

##### `IgnoreCertificateUsersData`<sup>Required</sup> <a name="IgnoreCertificateUsersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersData"></a>

```csharp
public object IgnoreCertificateUsersData { get; }
```

- *Type:* object

---

##### `KubeProxyMode`<sup>Required</sup> <a name="KubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyMode"></a>

```csharp
public string KubeProxyMode { get; }
```

- *Type:* string

---

##### `KubernetesSvcIpRange`<sup>Required</sup> <a name="KubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRange"></a>

```csharp
public string KubernetesSvcIpRange { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAz"></a>

```csharp
public object MultiAz { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NoAddons`<sup>Required</sup> <a name="NoAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddons"></a>

```csharp
public object NoAddons { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CceClusterV3AuthenticatingProxy <a name="CceClusterV3AuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3AuthenticatingProxy {
    string Ca,
    string Cert,
    string PrivateKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.ca">Ca</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#ca CceClusterV3#ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.cert">Cert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#cert CceClusterV3#cert}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#private_key CceClusterV3#private_key}. |

---

##### `Ca`<sup>Required</sup> <a name="Ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.ca"></a>

```csharp
public string Ca { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#ca CceClusterV3#ca}.

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#cert CceClusterV3#cert}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#private_key CceClusterV3#private_key}.

---

### CceClusterV3CertificateClusters <a name="CceClusterV3CertificateClusters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3CertificateClusters {

};
```


### CceClusterV3CertificateUsers <a name="CceClusterV3CertificateUsers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3CertificateUsers {

};
```


### CceClusterV3Config <a name="CceClusterV3Config" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterType,
    string ContainerNetworkType,
    string FlavorId,
    string Name,
    string SubnetId,
    string VpcId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    CceClusterV3AuthenticatingProxy AuthenticatingProxy = null,
    string AuthenticatingProxyCa = null,
    string AuthenticationMode = null,
    double BillingMode = null,
    string ClusterVersion = null,
    string ContainerNetworkCidr = null,
    string DeleteAllNetwork = null,
    string DeleteAllStorage = null,
    string DeleteEfs = null,
    string DeleteEni = null,
    string DeleteEvs = null,
    string DeleteNet = null,
    string DeleteObs = null,
    string DeleteSfs = null,
    string Description = null,
    string Eip = null,
    object EnableVolumeEncryption = null,
    string EniSubnetCidr = null,
    string EniSubnetId = null,
    System.Collections.Generic.IDictionary<string, string> ExtendParam = null,
    string HighwaySubnetId = null,
    string Id = null,
    object IgnoreAddons = null,
    object IgnoreCertificateClustersData = null,
    object IgnoreCertificateUsersData = null,
    string KubeProxyMode = null,
    string KubernetesSvcIpRange = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object MultiAz = null,
    object NoAddons = null,
    string Region = null,
    string SecurityGroupId = null,
    CceClusterV3Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterType">ClusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkType">ContainerNetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.flavorId">FlavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#name CceClusterV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxy">AuthenticatingProxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | authenticating_proxy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxyCa">AuthenticatingProxyCa</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.billingMode">BillingMode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkCidr">ContainerNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllNetwork">DeleteAllNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllStorage">DeleteAllStorage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEfs">DeleteEfs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEni">DeleteEni</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEvs">DeleteEvs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteNet">DeleteNet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteObs">DeleteObs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteSfs">DeleteSfs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#description CceClusterV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eip">Eip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.enableVolumeEncryption">EnableVolumeEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#enable_volume_encryption CceClusterV3#enable_volume_encryption}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetCidr">EniSubnetCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetId">EniSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.extendParam">ExtendParam</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.highwaySubnetId">HighwaySubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#id CceClusterV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreAddons">IgnoreAddons</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateClustersData">IgnoreCertificateClustersData</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateUsersData">IgnoreCertificateUsersData</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubeProxyMode">KubeProxyMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubernetesSvcIpRange">KubernetesSvcIpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.multiAz">MultiAz</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.noAddons">NoAddons</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#region CceClusterV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#security_group_id CceClusterV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterType"></a>

```csharp
public string ClusterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}.

---

##### `ContainerNetworkType`<sup>Required</sup> <a name="ContainerNetworkType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkType"></a>

```csharp
public string ContainerNetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}.

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.flavorId"></a>

```csharp
public string FlavorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#name CceClusterV3#name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}.

---

##### `AuthenticatingProxy`<sup>Optional</sup> <a name="AuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxy"></a>

```csharp
public CceClusterV3AuthenticatingProxy AuthenticatingProxy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

authenticating_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#authenticating_proxy CceClusterV3#authenticating_proxy}

---

##### `AuthenticatingProxyCa`<sup>Optional</sup> <a name="AuthenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxyCa"></a>

```csharp
public string AuthenticatingProxyCa { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}.

---

##### `BillingMode`<sup>Optional</sup> <a name="BillingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.billingMode"></a>

```csharp
public double BillingMode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}.

---

##### `ClusterVersion`<sup>Optional</sup> <a name="ClusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}.

---

##### `ContainerNetworkCidr`<sup>Optional</sup> <a name="ContainerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkCidr"></a>

```csharp
public string ContainerNetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}.

---

##### `DeleteAllNetwork`<sup>Optional</sup> <a name="DeleteAllNetwork" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllNetwork"></a>

```csharp
public string DeleteAllNetwork { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}.

---

##### `DeleteAllStorage`<sup>Optional</sup> <a name="DeleteAllStorage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllStorage"></a>

```csharp
public string DeleteAllStorage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}.

---

##### `DeleteEfs`<sup>Optional</sup> <a name="DeleteEfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEfs"></a>

```csharp
public string DeleteEfs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}.

---

##### `DeleteEni`<sup>Optional</sup> <a name="DeleteEni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEni"></a>

```csharp
public string DeleteEni { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}.

---

##### `DeleteEvs`<sup>Optional</sup> <a name="DeleteEvs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEvs"></a>

```csharp
public string DeleteEvs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}.

---

##### `DeleteNet`<sup>Optional</sup> <a name="DeleteNet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteNet"></a>

```csharp
public string DeleteNet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}.

---

##### `DeleteObs`<sup>Optional</sup> <a name="DeleteObs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteObs"></a>

```csharp
public string DeleteObs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}.

---

##### `DeleteSfs`<sup>Optional</sup> <a name="DeleteSfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteSfs"></a>

```csharp
public string DeleteSfs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#description CceClusterV3#description}.

---

##### `Eip`<sup>Optional</sup> <a name="Eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eip"></a>

```csharp
public string Eip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}.

---

##### `EnableVolumeEncryption`<sup>Optional</sup> <a name="EnableVolumeEncryption" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.enableVolumeEncryption"></a>

```csharp
public object EnableVolumeEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#enable_volume_encryption CceClusterV3#enable_volume_encryption}.

---

##### `EniSubnetCidr`<sup>Optional</sup> <a name="EniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetCidr"></a>

```csharp
public string EniSubnetCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}.

---

##### `EniSubnetId`<sup>Optional</sup> <a name="EniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetId"></a>

```csharp
public string EniSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}.

---

##### `ExtendParam`<sup>Optional</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.extendParam"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendParam { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}.

---

##### `HighwaySubnetId`<sup>Optional</sup> <a name="HighwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.highwaySubnetId"></a>

```csharp
public string HighwaySubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#id CceClusterV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreAddons`<sup>Optional</sup> <a name="IgnoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreAddons"></a>

```csharp
public object IgnoreAddons { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}.

---

##### `IgnoreCertificateClustersData`<sup>Optional</sup> <a name="IgnoreCertificateClustersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateClustersData"></a>

```csharp
public object IgnoreCertificateClustersData { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}.

---

##### `IgnoreCertificateUsersData`<sup>Optional</sup> <a name="IgnoreCertificateUsersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateUsersData"></a>

```csharp
public object IgnoreCertificateUsersData { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}.

---

##### `KubeProxyMode`<sup>Optional</sup> <a name="KubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubeProxyMode"></a>

```csharp
public string KubeProxyMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}.

---

##### `KubernetesSvcIpRange`<sup>Optional</sup> <a name="KubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubernetesSvcIpRange"></a>

```csharp
public string KubernetesSvcIpRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}.

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.multiAz"></a>

```csharp
public object MultiAz { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}.

---

##### `NoAddons`<sup>Optional</sup> <a name="NoAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.noAddons"></a>

```csharp
public object NoAddons { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#region CceClusterV3#region}.

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#security_group_id CceClusterV3#security_group_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timeouts"></a>

```csharp
public CceClusterV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#timeouts CceClusterV3#timeouts}

---

### CceClusterV3Timeouts <a name="CceClusterV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#create CceClusterV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete CceClusterV3#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#create CceClusterV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/cce_cluster_v3#delete CceClusterV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceClusterV3AuthenticatingProxyOutputReference <a name="CceClusterV3AuthenticatingProxyOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3AuthenticatingProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.caInput">CaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.ca">Ca</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaInput`<sup>Optional</sup> <a name="CaInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.caInput"></a>

```csharp
public string CaInput { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `Ca`<sup>Required</sup> <a name="Ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.ca"></a>

```csharp
public string Ca { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.internalValue"></a>

```csharp
public CceClusterV3AuthenticatingProxy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---


### CceClusterV3CertificateClustersList <a name="CceClusterV3CertificateClustersList" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3CertificateClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get"></a>

```csharp
private CceClusterV3CertificateClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CceClusterV3CertificateClustersOutputReference <a name="CceClusterV3CertificateClustersOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3CertificateClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData">CertificateAuthorityData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters">CceClusterV3CertificateClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityData`<sup>Required</sup> <a name="CertificateAuthorityData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData"></a>

```csharp
public string CertificateAuthorityData { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.internalValue"></a>

```csharp
public CceClusterV3CertificateClusters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters">CceClusterV3CertificateClusters</a>

---


### CceClusterV3CertificateUsersList <a name="CceClusterV3CertificateUsersList" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3CertificateUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get"></a>

```csharp
private CceClusterV3CertificateUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CceClusterV3CertificateUsersOutputReference <a name="CceClusterV3CertificateUsersOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3CertificateUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientCertificateData">ClientCertificateData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientKeyData">ClientKeyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers">CceClusterV3CertificateUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientCertificateData`<sup>Required</sup> <a name="ClientCertificateData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientCertificateData"></a>

```csharp
public string ClientCertificateData { get; }
```

- *Type:* string

---

##### `ClientKeyData`<sup>Required</sup> <a name="ClientKeyData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientKeyData"></a>

```csharp
public string ClientKeyData { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.internalValue"></a>

```csharp
public CceClusterV3CertificateUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers">CceClusterV3CertificateUsers</a>

---


### CceClusterV3TimeoutsOutputReference <a name="CceClusterV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CceClusterV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



