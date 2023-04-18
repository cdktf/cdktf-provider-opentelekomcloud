# `opentelekomcloud_vpnaas_site_connection_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_vpnaas_site_connection_v2`](https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2).

# `vpnaasSiteConnectionV2` Submodule <a name="`vpnaasSiteConnectionV2` Submodule" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnaasSiteConnectionV2 <a name="VpnaasSiteConnectionV2" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2 opentelekomcloud_vpnaas_site_connection_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasSiteConnectionV2(Construct Scope, string Id, VpnaasSiteConnectionV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config">VpnaasSiteConnectionV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config">VpnaasSiteConnectionV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd">PutDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDpd">ResetDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetInitiator">ResetInitiator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalEpGroupId">ResetLocalEpGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalId">ResetLocalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerCidrs">ResetPeerCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerEpGroupId">ResetPeerEpGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetValueSpecs">ResetValueSpecs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDpd` <a name="PutDpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd"></a>

```csharp
private void PutDpd(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts"></a>

```csharp
private void PutTimeouts(VpnaasSiteConnectionV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetAdminStateUp"></a>

```csharp
private void ResetAdminStateUp()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDpd` <a name="ResetDpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDpd"></a>

```csharp
private void ResetDpd()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitiator` <a name="ResetInitiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetInitiator"></a>

```csharp
private void ResetInitiator()
```

##### `ResetLocalEpGroupId` <a name="ResetLocalEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalEpGroupId"></a>

```csharp
private void ResetLocalEpGroupId()
```

##### `ResetLocalId` <a name="ResetLocalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalId"></a>

```csharp
private void ResetLocalId()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPeerCidrs` <a name="ResetPeerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerCidrs"></a>

```csharp
private void ResetPeerCidrs()
```

##### `ResetPeerEpGroupId` <a name="ResetPeerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerEpGroupId"></a>

```csharp
private void ResetPeerEpGroupId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValueSpecs` <a name="ResetValueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetValueSpecs"></a>

```csharp
private void ResetValueSpecs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpnaasSiteConnectionV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpnaasSiteConnectionV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

VpnaasSiteConnectionV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpd">Dpd</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList">VpnaasSiteConnectionV2DpdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference">VpnaasSiteConnectionV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpdInput">DpdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyIdInput">IkepolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiatorInput">InitiatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyIdInput">IpsecpolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupIdInput">LocalEpGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localIdInput">LocalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddressInput">PeerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrsInput">PeerCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupIdInput">PeerEpGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerIdInput">PeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.pskInput">PskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecsInput">ValueSpecsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceIdInput">VpnserviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyId">IkepolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiator">Initiator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyId">IpsecpolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupId">LocalEpGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localId">LocalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddress">PeerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrs">PeerCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupId">PeerEpGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerId">PeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.psk">Psk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceId">VpnserviceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Dpd`<sup>Required</sup> <a name="Dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpd"></a>

```csharp
public VpnaasSiteConnectionV2DpdList Dpd { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList">VpnaasSiteConnectionV2DpdList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeouts"></a>

```csharp
public VpnaasSiteConnectionV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference">VpnaasSiteConnectionV2TimeoutsOutputReference</a>

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUpInput"></a>

```csharp
public object AdminStateUpInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DpdInput`<sup>Optional</sup> <a name="DpdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpdInput"></a>

```csharp
public object DpdInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IkepolicyIdInput`<sup>Optional</sup> <a name="IkepolicyIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyIdInput"></a>

```csharp
public string IkepolicyIdInput { get; }
```

- *Type:* string

---

##### `InitiatorInput`<sup>Optional</sup> <a name="InitiatorInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiatorInput"></a>

```csharp
public string InitiatorInput { get; }
```

- *Type:* string

---

##### `IpsecpolicyIdInput`<sup>Optional</sup> <a name="IpsecpolicyIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyIdInput"></a>

```csharp
public string IpsecpolicyIdInput { get; }
```

- *Type:* string

---

##### `LocalEpGroupIdInput`<sup>Optional</sup> <a name="LocalEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupIdInput"></a>

```csharp
public string LocalEpGroupIdInput { get; }
```

- *Type:* string

---

##### `LocalIdInput`<sup>Optional</sup> <a name="LocalIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localIdInput"></a>

```csharp
public string LocalIdInput { get; }
```

- *Type:* string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeerAddressInput`<sup>Optional</sup> <a name="PeerAddressInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddressInput"></a>

```csharp
public string PeerAddressInput { get; }
```

- *Type:* string

---

##### `PeerCidrsInput`<sup>Optional</sup> <a name="PeerCidrsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrsInput"></a>

```csharp
public string[] PeerCidrsInput { get; }
```

- *Type:* string[]

---

##### `PeerEpGroupIdInput`<sup>Optional</sup> <a name="PeerEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupIdInput"></a>

```csharp
public string PeerEpGroupIdInput { get; }
```

- *Type:* string

---

##### `PeerIdInput`<sup>Optional</sup> <a name="PeerIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerIdInput"></a>

```csharp
public string PeerIdInput { get; }
```

- *Type:* string

---

##### `PskInput`<sup>Optional</sup> <a name="PskInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.pskInput"></a>

```csharp
public string PskInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValueSpecsInput`<sup>Optional</sup> <a name="ValueSpecsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpnserviceIdInput`<sup>Optional</sup> <a name="VpnserviceIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceIdInput"></a>

```csharp
public string VpnserviceIdInput { get; }
```

- *Type:* string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IkepolicyId`<sup>Required</sup> <a name="IkepolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyId"></a>

```csharp
public string IkepolicyId { get; }
```

- *Type:* string

---

##### `Initiator`<sup>Required</sup> <a name="Initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiator"></a>

```csharp
public string Initiator { get; }
```

- *Type:* string

---

##### `IpsecpolicyId`<sup>Required</sup> <a name="IpsecpolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyId"></a>

```csharp
public string IpsecpolicyId { get; }
```

- *Type:* string

---

##### `LocalEpGroupId`<sup>Required</sup> <a name="LocalEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupId"></a>

```csharp
public string LocalEpGroupId { get; }
```

- *Type:* string

---

##### `LocalId`<sup>Required</sup> <a name="LocalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localId"></a>

```csharp
public string LocalId { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddress"></a>

```csharp
public string PeerAddress { get; }
```

- *Type:* string

---

##### `PeerCidrs`<sup>Required</sup> <a name="PeerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrs"></a>

```csharp
public string[] PeerCidrs { get; }
```

- *Type:* string[]

---

##### `PeerEpGroupId`<sup>Required</sup> <a name="PeerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupId"></a>

```csharp
public string PeerEpGroupId { get; }
```

- *Type:* string

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerId"></a>

```csharp
public string PeerId { get; }
```

- *Type:* string

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.psk"></a>

```csharp
public string Psk { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `ValueSpecs`<sup>Required</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpnserviceId`<sup>Required</sup> <a name="VpnserviceId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceId"></a>

```csharp
public string VpnserviceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnaasSiteConnectionV2Config <a name="VpnaasSiteConnectionV2Config" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasSiteConnectionV2Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IkepolicyId,
    string IpsecpolicyId,
    string PeerAddress,
    string PeerId,
    string Psk,
    string VpnserviceId,
    object AdminStateUp = null,
    string Description = null,
    object Dpd = null,
    string Id = null,
    string Initiator = null,
    string LocalEpGroupId = null,
    string LocalId = null,
    double Mtu = null,
    string Name = null,
    string[] PeerCidrs = null,
    string PeerEpGroupId = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TenantId = null,
    VpnaasSiteConnectionV2Timeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> ValueSpecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ikepolicyId">IkepolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ipsecpolicyId">IpsecpolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerAddress">PeerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerId">PeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.psk">Psk</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.vpnserviceId">VpnserviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dpd">Dpd</a></code> | <code>object</code> | dpd block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.initiator">Initiator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localEpGroupId">LocalEpGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localId">LocalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.mtu">Mtu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerCidrs">PeerCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerEpGroupId">PeerEpGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.valueSpecs">ValueSpecs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IkepolicyId`<sup>Required</sup> <a name="IkepolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ikepolicyId"></a>

```csharp
public string IkepolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}.

---

##### `IpsecpolicyId`<sup>Required</sup> <a name="IpsecpolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ipsecpolicyId"></a>

```csharp
public string IpsecpolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}.

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerAddress"></a>

```csharp
public string PeerAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}.

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerId"></a>

```csharp
public string PeerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}.

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.psk"></a>

```csharp
public string Psk { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}.

---

##### `VpnserviceId`<sup>Required</sup> <a name="VpnserviceId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.vpnserviceId"></a>

```csharp
public string VpnserviceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}.

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}.

---

##### `Dpd`<sup>Optional</sup> <a name="Dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dpd"></a>

```csharp
public object Dpd { get; set; }
```

- *Type:* object

dpd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#dpd VpnaasSiteConnectionV2#dpd}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Initiator`<sup>Optional</sup> <a name="Initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.initiator"></a>

```csharp
public string Initiator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}.

---

##### `LocalEpGroupId`<sup>Optional</sup> <a name="LocalEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localEpGroupId"></a>

```csharp
public string LocalEpGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}.

---

##### `LocalId`<sup>Optional</sup> <a name="LocalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localId"></a>

```csharp
public string LocalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}.

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}.

---

##### `PeerCidrs`<sup>Optional</sup> <a name="PeerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerCidrs"></a>

```csharp
public string[] PeerCidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}.

---

##### `PeerEpGroupId`<sup>Optional</sup> <a name="PeerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerEpGroupId"></a>

```csharp
public string PeerEpGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.timeouts"></a>

```csharp
public VpnaasSiteConnectionV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#timeouts VpnaasSiteConnectionV2#timeouts}

---

##### `ValueSpecs`<sup>Optional</sup> <a name="ValueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.valueSpecs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueSpecs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}.

---

### VpnaasSiteConnectionV2Dpd <a name="VpnaasSiteConnectionV2Dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasSiteConnectionV2Dpd {
    string Action = null,
    double Interval = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#action VpnaasSiteConnectionV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#interval VpnaasSiteConnectionV2#interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#timeout VpnaasSiteConnectionV2#timeout}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#action VpnaasSiteConnectionV2#action}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#interval VpnaasSiteConnectionV2#interval}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#timeout VpnaasSiteConnectionV2#timeout}.

---

### VpnaasSiteConnectionV2Timeouts <a name="VpnaasSiteConnectionV2Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasSiteConnectionV2Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnaasSiteConnectionV2DpdList <a name="VpnaasSiteConnectionV2DpdList" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasSiteConnectionV2DpdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get"></a>

```csharp
private VpnaasSiteConnectionV2DpdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnaasSiteConnectionV2DpdOutputReference <a name="VpnaasSiteConnectionV2DpdOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasSiteConnectionV2DpdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnaasSiteConnectionV2TimeoutsOutputReference <a name="VpnaasSiteConnectionV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new VpnaasSiteConnectionV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



