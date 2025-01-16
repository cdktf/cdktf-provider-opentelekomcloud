# `dataOpentelekomcloudEvsVolumesV2` Submodule <a name="`dataOpentelekomcloudEvsVolumesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudEvsVolumesV2 <a name="DataOpentelekomcloudEvsVolumesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2 opentelekomcloud_evs_volumes_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudEvsVolumesV2(Construct Scope, string Id, DataOpentelekomcloudEvsVolumesV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config">DataOpentelekomcloudEvsVolumesV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config">DataOpentelekomcloudEvsVolumesV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetServerId">ResetServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetShareable">ResetShareable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeId">ResetVolumeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeTypeId">ResetVolumeTypeId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetServerId` <a name="ResetServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetServerId"></a>

```csharp
private void ResetServerId()
```

##### `ResetShareable` <a name="ResetShareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetShareable"></a>

```csharp
private void ResetShareable()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeId"></a>

```csharp
private void ResetVolumeId()
```

##### `ResetVolumeTypeId` <a name="ResetVolumeTypeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeTypeId"></a>

```csharp
private void ResetVolumeTypeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudEvsVolumesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudEvsVolumesV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudEvsVolumesV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudEvsVolumesV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudEvsVolumesV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudEvsVolumesV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudEvsVolumesV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudEvsVolumesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudEvsVolumesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList">DataOpentelekomcloudEvsVolumesV2VolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareableInput">ShareableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeIdInput">VolumeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareable">Shareable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeId">VolumeTypeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumes"></a>

```csharp
public DataOpentelekomcloudEvsVolumesV2VolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList">DataOpentelekomcloudEvsVolumesV2VolumesList</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `ShareableInput`<sup>Optional</sup> <a name="ShareableInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareableInput"></a>

```csharp
public object ShareableInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `VolumeTypeIdInput`<sup>Optional</sup> <a name="VolumeTypeIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeIdInput"></a>

```csharp
public string VolumeTypeIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `Shareable`<sup>Required</sup> <a name="Shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareable"></a>

```csharp
public object Shareable { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `VolumeTypeId`<sup>Required</sup> <a name="VolumeTypeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeId"></a>

```csharp
public string VolumeTypeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudEvsVolumesV2Config <a name="DataOpentelekomcloudEvsVolumesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudEvsVolumesV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone = null,
    string Id = null,
    string Name = null,
    string ServerId = null,
    object Shareable = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string VolumeId = null,
    string VolumeTypeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#availability_zone DataOpentelekomcloudEvsVolumesV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#id DataOpentelekomcloudEvsVolumesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#name DataOpentelekomcloudEvsVolumesV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#server_id DataOpentelekomcloudEvsVolumesV2#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.shareable">Shareable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#shareable DataOpentelekomcloudEvsVolumesV2#shareable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#status DataOpentelekomcloudEvsVolumesV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#tags DataOpentelekomcloudEvsVolumesV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeId">VolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#volume_id DataOpentelekomcloudEvsVolumesV2#volume_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeTypeId">VolumeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#volume_type_id DataOpentelekomcloudEvsVolumesV2#volume_type_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#availability_zone DataOpentelekomcloudEvsVolumesV2#availability_zone}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#id DataOpentelekomcloudEvsVolumesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#name DataOpentelekomcloudEvsVolumesV2#name}.

---

##### `ServerId`<sup>Optional</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#server_id DataOpentelekomcloudEvsVolumesV2#server_id}.

---

##### `Shareable`<sup>Optional</sup> <a name="Shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.shareable"></a>

```csharp
public object Shareable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#shareable DataOpentelekomcloudEvsVolumesV2#shareable}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#status DataOpentelekomcloudEvsVolumesV2#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#tags DataOpentelekomcloudEvsVolumesV2#tags}.

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#volume_id DataOpentelekomcloudEvsVolumesV2#volume_id}.

---

##### `VolumeTypeId`<sup>Optional</sup> <a name="VolumeTypeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeTypeId"></a>

```csharp
public string VolumeTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/evs_volumes_v2#volume_type_id DataOpentelekomcloudEvsVolumesV2#volume_type_id}.

---

### DataOpentelekomcloudEvsVolumesV2Volumes <a name="DataOpentelekomcloudEvsVolumesV2Volumes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudEvsVolumesV2Volumes {

};
```


### DataOpentelekomcloudEvsVolumesV2VolumesAttachments <a name="DataOpentelekomcloudEvsVolumesV2VolumesAttachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudEvsVolumesV2VolumesAttachments {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList <a name="DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.get"></a>

```csharp
private DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference <a name="DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedAt">AttachedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedMode">AttachedMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments">DataOpentelekomcloudEvsVolumesV2VolumesAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachedAt`<sup>Required</sup> <a name="AttachedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedAt"></a>

```csharp
public string AttachedAt { get; }
```

- *Type:* string

---

##### `AttachedMode`<sup>Required</sup> <a name="AttachedMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedMode"></a>

```csharp
public string AttachedMode { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudEvsVolumesV2VolumesAttachments InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments">DataOpentelekomcloudEvsVolumesV2VolumesAttachments</a>

---


### DataOpentelekomcloudEvsVolumesV2VolumesList <a name="DataOpentelekomcloudEvsVolumesV2VolumesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudEvsVolumesV2VolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.get"></a>

```csharp
private DataOpentelekomcloudEvsVolumesV2VolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudEvsVolumesV2VolumesOutputReference <a name="DataOpentelekomcloudEvsVolumesV2VolumesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudEvsVolumesV2VolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.attachments">Attachments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList">DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.bootable">Bootable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.createAt">CreateAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.shareable">Shareable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.updateAt">UpdateAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.wwn">Wwn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes">DataOpentelekomcloudEvsVolumesV2Volumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.attachments"></a>

```csharp
public DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList Attachments { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList">DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Bootable`<sup>Required</sup> <a name="Bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.bootable"></a>

```csharp
public IResolvable Bootable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreateAt`<sup>Required</sup> <a name="CreateAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.createAt"></a>

```csharp
public string CreateAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `Shareable`<sup>Required</sup> <a name="Shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.shareable"></a>

```csharp
public IResolvable Shareable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `UpdateAt`<sup>Required</sup> <a name="UpdateAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.updateAt"></a>

```csharp
public string UpdateAt { get; }
```

- *Type:* string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `Wwn`<sup>Required</sup> <a name="Wwn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.wwn"></a>

```csharp
public string Wwn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudEvsVolumesV2Volumes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes">DataOpentelekomcloudEvsVolumesV2Volumes</a>

---



