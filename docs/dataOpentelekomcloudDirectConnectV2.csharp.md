# `dataOpentelekomcloudDirectConnectV2` Submodule <a name="`dataOpentelekomcloudDirectConnectV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDirectConnectV2 <a name="DataOpentelekomcloudDirectConnectV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2 opentelekomcloud_direct_connect_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudDirectConnectV2(Construct Scope, string Id, DataOpentelekomcloudDirectConnectV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config">DataOpentelekomcloudDirectConnectV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config">DataOpentelekomcloudDirectConnectV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetPortType">ResetPortType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetVlan">ResetVlan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetBandwidth"></a>

```csharp
private void ResetBandwidth()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDeviceId"></a>

```csharp
private void ResetDeviceId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPortType` <a name="ResetPortType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetPortType"></a>

```csharp
private void ResetPortType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVlan` <a name="ResetVlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetVlan"></a>

```csharp
private void ResetVlan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDirectConnectV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudDirectConnectV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudDirectConnectV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudDirectConnectV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudDirectConnectV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudDirectConnectV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudDirectConnectV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudDirectConnectV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDirectConnectV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.adminStateUp">AdminStateUp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applicant">Applicant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applyTime">ApplyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.buildingLineProductId">BuildingLineProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cableLabel">CableLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.chargeMode">ChargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.hostingId">HostingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lagId">LagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lastOnestopProductId">LastOnestopProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.mobile">Mobile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.onestopProductId">OnestopProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerLocation">PeerLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerPortType">PeerPortType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerProvider">PeerProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodNum">PeriodNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodType">PeriodType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerStatus">ProviderStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.redundantId">RedundantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionId">RegionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.serviceKey">ServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.specCode">SpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vgwType">VgwType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidthInput">BandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceIdInput">DeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portTypeInput">PortTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlanInput">VlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidth">Bandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceId">DeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portType">PortType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.adminStateUp"></a>

```csharp
public IResolvable AdminStateUp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Applicant`<sup>Required</sup> <a name="Applicant" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applicant"></a>

```csharp
public string Applicant { get; }
```

- *Type:* string

---

##### `ApplyTime`<sup>Required</sup> <a name="ApplyTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applyTime"></a>

```csharp
public string ApplyTime { get; }
```

- *Type:* string

---

##### `BuildingLineProductId`<sup>Required</sup> <a name="BuildingLineProductId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.buildingLineProductId"></a>

```csharp
public string BuildingLineProductId { get; }
```

- *Type:* string

---

##### `CableLabel`<sup>Required</sup> <a name="CableLabel" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cableLabel"></a>

```csharp
public string CableLabel { get; }
```

- *Type:* string

---

##### `ChargeMode`<sup>Required</sup> <a name="ChargeMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.chargeMode"></a>

```csharp
public string ChargeMode { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `HostingId`<sup>Required</sup> <a name="HostingId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.hostingId"></a>

```csharp
public string HostingId { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `LagId`<sup>Required</sup> <a name="LagId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lagId"></a>

```csharp
public string LagId { get; }
```

- *Type:* string

---

##### `LastOnestopProductId`<sup>Required</sup> <a name="LastOnestopProductId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lastOnestopProductId"></a>

```csharp
public string LastOnestopProductId { get; }
```

- *Type:* string

---

##### `Mobile`<sup>Required</sup> <a name="Mobile" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.mobile"></a>

```csharp
public string Mobile { get; }
```

- *Type:* string

---

##### `OnestopProductId`<sup>Required</sup> <a name="OnestopProductId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.onestopProductId"></a>

```csharp
public string OnestopProductId { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `PeerLocation`<sup>Required</sup> <a name="PeerLocation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerLocation"></a>

```csharp
public string PeerLocation { get; }
```

- *Type:* string

---

##### `PeerPortType`<sup>Required</sup> <a name="PeerPortType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerPortType"></a>

```csharp
public string PeerPortType { get; }
```

- *Type:* string

---

##### `PeerProvider`<sup>Required</sup> <a name="PeerProvider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerProvider"></a>

```csharp
public string PeerProvider { get; }
```

- *Type:* string

---

##### `PeriodNum`<sup>Required</sup> <a name="PeriodNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodNum"></a>

```csharp
public double PeriodNum { get; }
```

- *Type:* double

---

##### `PeriodType`<sup>Required</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodType"></a>

```csharp
public double PeriodType { get; }
```

- *Type:* double

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ProviderStatus`<sup>Required</sup> <a name="ProviderStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerStatus"></a>

```csharp
public string ProviderStatus { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `RedundantId`<sup>Required</sup> <a name="RedundantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.redundantId"></a>

```csharp
public string RedundantId { get; }
```

- *Type:* string

---

##### `RegionId`<sup>Required</sup> <a name="RegionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionId"></a>

```csharp
public string RegionId { get; }
```

- *Type:* string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.serviceKey"></a>

```csharp
public string ServiceKey { get; }
```

- *Type:* string

---

##### `SpecCode`<sup>Required</sup> <a name="SpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.specCode"></a>

```csharp
public string SpecCode { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VgwType`<sup>Required</sup> <a name="VgwType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vgwType"></a>

```csharp
public string VgwType { get; }
```

- *Type:* string

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidthInput"></a>

```csharp
public double BandwidthInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceIdInput"></a>

```csharp
public string DeviceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortTypeInput`<sup>Optional</sup> <a name="PortTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portTypeInput"></a>

```csharp
public string PortTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlanInput"></a>

```csharp
public double VlanInput { get; }
```

- *Type:* double

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidth"></a>

```csharp
public double Bandwidth { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceId"></a>

```csharp
public string DeviceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortType`<sup>Required</sup> <a name="PortType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portType"></a>

```csharp
public string PortType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDirectConnectV2Config <a name="DataOpentelekomcloudDirectConnectV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudDirectConnectV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Bandwidth = null,
    string Description = null,
    string DeviceId = null,
    string Id = null,
    string Location = null,
    string Name = null,
    string PortType = null,
    string Region = null,
    double Vlan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.bandwidth">Bandwidth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#bandwidth DataOpentelekomcloudDirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#description DataOpentelekomcloudDirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.deviceId">DeviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#device_id DataOpentelekomcloudDirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#id DataOpentelekomcloudDirectConnectV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#location DataOpentelekomcloudDirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#name DataOpentelekomcloudDirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.portType">PortType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#port_type DataOpentelekomcloudDirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#region DataOpentelekomcloudDirectConnectV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.vlan">Vlan</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#vlan DataOpentelekomcloudDirectConnectV2#vlan}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.bandwidth"></a>

```csharp
public double Bandwidth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#bandwidth DataOpentelekomcloudDirectConnectV2#bandwidth}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#description DataOpentelekomcloudDirectConnectV2#description}.

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.deviceId"></a>

```csharp
public string DeviceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#device_id DataOpentelekomcloudDirectConnectV2#device_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#id DataOpentelekomcloudDirectConnectV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#location DataOpentelekomcloudDirectConnectV2#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#name DataOpentelekomcloudDirectConnectV2#name}.

---

##### `PortType`<sup>Optional</sup> <a name="PortType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.portType"></a>

```csharp
public string PortType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#port_type DataOpentelekomcloudDirectConnectV2#port_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#region DataOpentelekomcloudDirectConnectV2#region}.

---

##### `Vlan`<sup>Optional</sup> <a name="Vlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.vlan"></a>

```csharp
public double Vlan { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/direct_connect_v2#vlan DataOpentelekomcloudDirectConnectV2#vlan}.

---



