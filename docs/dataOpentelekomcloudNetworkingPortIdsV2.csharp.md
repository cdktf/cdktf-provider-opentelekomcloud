# `dataOpentelekomcloudNetworkingPortIdsV2` Submodule <a name="`dataOpentelekomcloudNetworkingPortIdsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNetworkingPortIdsV2 <a name="DataOpentelekomcloudNetworkingPortIdsV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2 opentelekomcloud_networking_port_ids_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudNetworkingPortIdsV2(Construct Scope, string Id, DataOpentelekomcloudNetworkingPortIdsV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config">DataOpentelekomcloudNetworkingPortIdsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config">DataOpentelekomcloudNetworkingPortIdsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetDeviceOwner">ResetDeviceOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetFixedIp">ResetFixedIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetMacAddress">ResetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetNetworkId">ResetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSortDirection">ResetSortDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSortKey">ResetSortKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetDeviceId"></a>

```csharp
private void ResetDeviceId()
```

##### `ResetDeviceOwner` <a name="ResetDeviceOwner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetDeviceOwner"></a>

```csharp
private void ResetDeviceOwner()
```

##### `ResetFixedIp` <a name="ResetFixedIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetFixedIp"></a>

```csharp
private void ResetFixedIp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetMacAddress"></a>

```csharp
private void ResetMacAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNetworkId` <a name="ResetNetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetNetworkId"></a>

```csharp
private void ResetNetworkId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSortDirection` <a name="ResetSortDirection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSortDirection"></a>

```csharp
private void ResetSortDirection()
```

##### `ResetSortKey` <a name="ResetSortKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetSortKey"></a>

```csharp
private void ResetSortKey()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudNetworkingPortIdsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudNetworkingPortIdsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudNetworkingPortIdsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudNetworkingPortIdsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudNetworkingPortIdsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudNetworkingPortIdsV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudNetworkingPortIdsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudNetworkingPortIdsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudNetworkingPortIdsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceIdInput">DeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceOwnerInput">DeviceOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fixedIpInput">FixedIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.macAddressInput">MacAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.networkIdInput">NetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortDirectionInput">SortDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortKeyInput">SortKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceId">DeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceOwner">DeviceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fixedIp">FixedIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortDirection">SortDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortKey">SortKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceIdInput"></a>

```csharp
public string DeviceIdInput { get; }
```

- *Type:* string

---

##### `DeviceOwnerInput`<sup>Optional</sup> <a name="DeviceOwnerInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceOwnerInput"></a>

```csharp
public string DeviceOwnerInput { get; }
```

- *Type:* string

---

##### `FixedIpInput`<sup>Optional</sup> <a name="FixedIpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fixedIpInput"></a>

```csharp
public string FixedIpInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.macAddressInput"></a>

```csharp
public string MacAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.networkIdInput"></a>

```csharp
public string NetworkIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SortDirectionInput`<sup>Optional</sup> <a name="SortDirectionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortDirectionInput"></a>

```csharp
public string SortDirectionInput { get; }
```

- *Type:* string

---

##### `SortKeyInput`<sup>Optional</sup> <a name="SortKeyInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortKeyInput"></a>

```csharp
public string SortKeyInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceId"></a>

```csharp
public string DeviceId { get; }
```

- *Type:* string

---

##### `DeviceOwner`<sup>Required</sup> <a name="DeviceOwner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.deviceOwner"></a>

```csharp
public string DeviceOwner { get; }
```

- *Type:* string

---

##### `FixedIp`<sup>Required</sup> <a name="FixedIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.fixedIp"></a>

```csharp
public string FixedIp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SortDirection`<sup>Required</sup> <a name="SortDirection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortDirection"></a>

```csharp
public string SortDirection { get; }
```

- *Type:* string

---

##### `SortKey`<sup>Required</sup> <a name="SortKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.sortKey"></a>

```csharp
public string SortKey { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNetworkingPortIdsV2Config <a name="DataOpentelekomcloudNetworkingPortIdsV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudNetworkingPortIdsV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeviceId = null,
    string DeviceOwner = null,
    string FixedIp = null,
    string Id = null,
    string MacAddress = null,
    string Name = null,
    string NetworkId = null,
    string ProjectId = null,
    string Region = null,
    string[] SecurityGroupIds = null,
    string SortDirection = null,
    string SortKey = null,
    string Status = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.deviceId">DeviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#device_id DataOpentelekomcloudNetworkingPortIdsV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.deviceOwner">DeviceOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#device_owner DataOpentelekomcloudNetworkingPortIdsV2#device_owner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.fixedIp">FixedIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#fixed_ip DataOpentelekomcloudNetworkingPortIdsV2#fixed_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#id DataOpentelekomcloudNetworkingPortIdsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.macAddress">MacAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#mac_address DataOpentelekomcloudNetworkingPortIdsV2#mac_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#name DataOpentelekomcloudNetworkingPortIdsV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.networkId">NetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#network_id DataOpentelekomcloudNetworkingPortIdsV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#project_id DataOpentelekomcloudNetworkingPortIdsV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#region DataOpentelekomcloudNetworkingPortIdsV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#security_group_ids DataOpentelekomcloudNetworkingPortIdsV2#security_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.sortDirection">SortDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#sort_direction DataOpentelekomcloudNetworkingPortIdsV2#sort_direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.sortKey">SortKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#sort_key DataOpentelekomcloudNetworkingPortIdsV2#sort_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#status DataOpentelekomcloudNetworkingPortIdsV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#tenant_id DataOpentelekomcloudNetworkingPortIdsV2#tenant_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.deviceId"></a>

```csharp
public string DeviceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#device_id DataOpentelekomcloudNetworkingPortIdsV2#device_id}.

---

##### `DeviceOwner`<sup>Optional</sup> <a name="DeviceOwner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.deviceOwner"></a>

```csharp
public string DeviceOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#device_owner DataOpentelekomcloudNetworkingPortIdsV2#device_owner}.

---

##### `FixedIp`<sup>Optional</sup> <a name="FixedIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.fixedIp"></a>

```csharp
public string FixedIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#fixed_ip DataOpentelekomcloudNetworkingPortIdsV2#fixed_ip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#id DataOpentelekomcloudNetworkingPortIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.macAddress"></a>

```csharp
public string MacAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#mac_address DataOpentelekomcloudNetworkingPortIdsV2#mac_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#name DataOpentelekomcloudNetworkingPortIdsV2#name}.

---

##### `NetworkId`<sup>Optional</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.networkId"></a>

```csharp
public string NetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#network_id DataOpentelekomcloudNetworkingPortIdsV2#network_id}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#project_id DataOpentelekomcloudNetworkingPortIdsV2#project_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#region DataOpentelekomcloudNetworkingPortIdsV2#region}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#security_group_ids DataOpentelekomcloudNetworkingPortIdsV2#security_group_ids}.

---

##### `SortDirection`<sup>Optional</sup> <a name="SortDirection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.sortDirection"></a>

```csharp
public string SortDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#sort_direction DataOpentelekomcloudNetworkingPortIdsV2#sort_direction}.

---

##### `SortKey`<sup>Optional</sup> <a name="SortKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.sortKey"></a>

```csharp
public string SortKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#sort_key DataOpentelekomcloudNetworkingPortIdsV2#sort_key}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#status DataOpentelekomcloudNetworkingPortIdsV2#status}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortIdsV2.DataOpentelekomcloudNetworkingPortIdsV2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/networking_port_ids_v2#tenant_id DataOpentelekomcloudNetworkingPortIdsV2#tenant_id}.

---



