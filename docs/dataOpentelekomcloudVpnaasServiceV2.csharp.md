# `data_opentelekomcloud_vpnaas_service_v2`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_vpnaas_service_v2`](https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2).

# `dataOpentelekomcloudVpnaasServiceV2` Submodule <a name="`dataOpentelekomcloudVpnaasServiceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVpnaasServiceV2 <a name="DataOpentelekomcloudVpnaasServiceV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2 opentelekomcloud_vpnaas_service_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudVpnaasServiceV2(Construct Scope, string Id, DataOpentelekomcloudVpnaasServiceV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config">DataOpentelekomcloudVpnaasServiceV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config">DataOpentelekomcloudVpnaasServiceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetExternalV4Ip">ResetExternalV4Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetExternalV6Ip">ResetExternalV6Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetFlavorId">ResetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetRouterId">ResetRouterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetAdminStateUp"></a>

```csharp
private void ResetAdminStateUp()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExternalV4Ip` <a name="ResetExternalV4Ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetExternalV4Ip"></a>

```csharp
private void ResetExternalV4Ip()
```

##### `ResetExternalV6Ip` <a name="ResetExternalV6Ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetExternalV6Ip"></a>

```csharp
private void ResetExternalV6Ip()
```

##### `ResetFlavorId` <a name="ResetFlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetFlavorId"></a>

```csharp
private void ResetFlavorId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRouterId` <a name="ResetRouterId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetRouterId"></a>

```csharp
private void ResetRouterId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudVpnaasServiceV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudVpnaasServiceV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudVpnaasServiceV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.externalV4IpInput">ExternalV4IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.externalV6IpInput">ExternalV6IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.routerIdInput">RouterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.externalV4Ip">ExternalV4Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.externalV6Ip">ExternalV6Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.flavorId">FlavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.routerId">RouterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.adminStateUpInput"></a>

```csharp
public object AdminStateUpInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExternalV4IpInput`<sup>Optional</sup> <a name="ExternalV4IpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.externalV4IpInput"></a>

```csharp
public string ExternalV4IpInput { get; }
```

- *Type:* string

---

##### `ExternalV6IpInput`<sup>Optional</sup> <a name="ExternalV6IpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.externalV6IpInput"></a>

```csharp
public string ExternalV6IpInput { get; }
```

- *Type:* string

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.flavorIdInput"></a>

```csharp
public string FlavorIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RouterIdInput`<sup>Optional</sup> <a name="RouterIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.routerIdInput"></a>

```csharp
public string RouterIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExternalV4Ip`<sup>Required</sup> <a name="ExternalV4Ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.externalV4Ip"></a>

```csharp
public string ExternalV4Ip { get; }
```

- *Type:* string

---

##### `ExternalV6Ip`<sup>Required</sup> <a name="ExternalV6Ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.externalV6Ip"></a>

```csharp
public string ExternalV6Ip { get; }
```

- *Type:* string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.flavorId"></a>

```csharp
public string FlavorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RouterId`<sup>Required</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.routerId"></a>

```csharp
public string RouterId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVpnaasServiceV2Config <a name="DataOpentelekomcloudVpnaasServiceV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudVpnaasServiceV2Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AdminStateUp = null,
    string Description = null,
    string ExternalV4Ip = null,
    string ExternalV6Ip = null,
    string FlavorId = null,
    string Id = null,
    string Name = null,
    string ProjectId = null,
    string Region = null,
    string RouterId = null,
    string Status = null,
    string SubnetId = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#admin_state_up DataOpentelekomcloudVpnaasServiceV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#description DataOpentelekomcloudVpnaasServiceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.externalV4Ip">ExternalV4Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#external_v4_ip DataOpentelekomcloudVpnaasServiceV2#external_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.externalV6Ip">ExternalV6Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#external_v6_ip DataOpentelekomcloudVpnaasServiceV2#external_v6_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.flavorId">FlavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#flavor_id DataOpentelekomcloudVpnaasServiceV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#id DataOpentelekomcloudVpnaasServiceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#name DataOpentelekomcloudVpnaasServiceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#project_id DataOpentelekomcloudVpnaasServiceV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#region DataOpentelekomcloudVpnaasServiceV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.routerId">RouterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#router_id DataOpentelekomcloudVpnaasServiceV2#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#status DataOpentelekomcloudVpnaasServiceV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#subnet_id DataOpentelekomcloudVpnaasServiceV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#tenant_id DataOpentelekomcloudVpnaasServiceV2#tenant_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#admin_state_up DataOpentelekomcloudVpnaasServiceV2#admin_state_up}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#description DataOpentelekomcloudVpnaasServiceV2#description}.

---

##### `ExternalV4Ip`<sup>Optional</sup> <a name="ExternalV4Ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.externalV4Ip"></a>

```csharp
public string ExternalV4Ip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#external_v4_ip DataOpentelekomcloudVpnaasServiceV2#external_v4_ip}.

---

##### `ExternalV6Ip`<sup>Optional</sup> <a name="ExternalV6Ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.externalV6Ip"></a>

```csharp
public string ExternalV6Ip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#external_v6_ip DataOpentelekomcloudVpnaasServiceV2#external_v6_ip}.

---

##### `FlavorId`<sup>Optional</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.flavorId"></a>

```csharp
public string FlavorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#flavor_id DataOpentelekomcloudVpnaasServiceV2#flavor_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#id DataOpentelekomcloudVpnaasServiceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#name DataOpentelekomcloudVpnaasServiceV2#name}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#project_id DataOpentelekomcloudVpnaasServiceV2#project_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#region DataOpentelekomcloudVpnaasServiceV2#region}.

---

##### `RouterId`<sup>Optional</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.routerId"></a>

```csharp
public string RouterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#router_id DataOpentelekomcloudVpnaasServiceV2#router_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#status DataOpentelekomcloudVpnaasServiceV2#status}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#subnet_id DataOpentelekomcloudVpnaasServiceV2#subnet_id}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpnaasServiceV2.DataOpentelekomcloudVpnaasServiceV2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpnaas_service_v2#tenant_id DataOpentelekomcloudVpnaasServiceV2#tenant_id}.

---



