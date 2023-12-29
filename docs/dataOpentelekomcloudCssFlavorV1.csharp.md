# `dataOpentelekomcloudCssFlavorV1` Submodule <a name="`dataOpentelekomcloudCssFlavorV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCssFlavorV1 <a name="DataOpentelekomcloudCssFlavorV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1 opentelekomcloud_css_flavor_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCssFlavorV1(Construct Scope, string Id, DataOpentelekomcloudCssFlavorV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config">DataOpentelekomcloudCssFlavorV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config">DataOpentelekomcloudCssFlavorV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange">PutDiskRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetDiskRange">ResetDiskRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinCpu">ResetMinCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinRam">ResetMinRam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDiskRange` <a name="PutDiskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange"></a>

```csharp
private void PutDiskRange(DataOpentelekomcloudCssFlavorV1DiskRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

---

##### `ResetDiskRange` <a name="ResetDiskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetDiskRange"></a>

```csharp
private void ResetDiskRange()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinCpu` <a name="ResetMinCpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinCpu"></a>

```csharp
private void ResetMinCpu()
```

##### `ResetMinRam` <a name="ResetMinRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinRam"></a>

```csharp
private void ResetMinRam()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCssFlavorV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCssFlavorV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCssFlavorV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCssFlavorV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCssFlavorV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudCssFlavorV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCssFlavorV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCssFlavorV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCssFlavorV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRange">DiskRange</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference">DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.ram">Ram</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRangeInput">DiskRangeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpuInput">MinCpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRamInput">MinRamInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpu">MinCpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRam">MinRam</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `DiskRange`<sup>Required</sup> <a name="DiskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRange"></a>

```csharp
public DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference DiskRange { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference">DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference</a>

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.ram"></a>

```csharp
public double Ram { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `DiskRangeInput`<sup>Optional</sup> <a name="DiskRangeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRangeInput"></a>

```csharp
public DataOpentelekomcloudCssFlavorV1DiskRange DiskRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MinCpuInput`<sup>Optional</sup> <a name="MinCpuInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpuInput"></a>

```csharp
public double MinCpuInput { get; }
```

- *Type:* double

---

##### `MinRamInput`<sup>Optional</sup> <a name="MinRamInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRamInput"></a>

```csharp
public double MinRamInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MinCpu`<sup>Required</sup> <a name="MinCpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpu"></a>

```csharp
public double MinCpu { get; }
```

- *Type:* double

---

##### `MinRam`<sup>Required</sup> <a name="MinRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRam"></a>

```csharp
public double MinRam { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCssFlavorV1Config <a name="DataOpentelekomcloudCssFlavorV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCssFlavorV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataOpentelekomcloudCssFlavorV1DiskRange DiskRange = null,
    string Id = null,
    double MinCpu = null,
    double MinRam = null,
    string Name = null,
    string Type = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.diskRange">DiskRange</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | disk_range block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#id DataOpentelekomcloudCssFlavorV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minCpu">MinCpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minRam">MinRam</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#name DataOpentelekomcloudCssFlavorV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#type DataOpentelekomcloudCssFlavorV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#version DataOpentelekomcloudCssFlavorV1#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DiskRange`<sup>Optional</sup> <a name="DiskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.diskRange"></a>

```csharp
public DataOpentelekomcloudCssFlavorV1DiskRange DiskRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

disk_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#disk_range DataOpentelekomcloudCssFlavorV1#disk_range}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#id DataOpentelekomcloudCssFlavorV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinCpu`<sup>Optional</sup> <a name="MinCpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minCpu"></a>

```csharp
public double MinCpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}.

---

##### `MinRam`<sup>Optional</sup> <a name="MinRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minRam"></a>

```csharp
public double MinRam { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#name DataOpentelekomcloudCssFlavorV1#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#type DataOpentelekomcloudCssFlavorV1#type}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#version DataOpentelekomcloudCssFlavorV1#version}.

---

### DataOpentelekomcloudCssFlavorV1DiskRange <a name="DataOpentelekomcloudCssFlavorV1DiskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCssFlavorV1DiskRange {
    double MinFrom = null,
    double MinTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minFrom">MinFrom</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_from DataOpentelekomcloudCssFlavorV1#min_from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minTo">MinTo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_to DataOpentelekomcloudCssFlavorV1#min_to}. |

---

##### `MinFrom`<sup>Optional</sup> <a name="MinFrom" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minFrom"></a>

```csharp
public double MinFrom { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_from DataOpentelekomcloudCssFlavorV1#min_from}.

---

##### `MinTo`<sup>Optional</sup> <a name="MinTo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minTo"></a>

```csharp
public double MinTo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/css_flavor_v1#min_to DataOpentelekomcloudCssFlavorV1#min_to}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference <a name="DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinFrom">ResetMinFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinTo">ResetMinTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinFrom` <a name="ResetMinFrom" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinFrom"></a>

```csharp
private void ResetMinFrom()
```

##### `ResetMinTo` <a name="ResetMinTo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinTo"></a>

```csharp
private void ResetMinTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.from">From</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.to">To</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFromInput">MinFromInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minToInput">MinToInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFrom">MinFrom</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minTo">MinTo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.from"></a>

```csharp
public double From { get; }
```

- *Type:* double

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.to"></a>

```csharp
public double To { get; }
```

- *Type:* double

---

##### `MinFromInput`<sup>Optional</sup> <a name="MinFromInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFromInput"></a>

```csharp
public double MinFromInput { get; }
```

- *Type:* double

---

##### `MinToInput`<sup>Optional</sup> <a name="MinToInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minToInput"></a>

```csharp
public double MinToInput { get; }
```

- *Type:* double

---

##### `MinFrom`<sup>Required</sup> <a name="MinFrom" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFrom"></a>

```csharp
public double MinFrom { get; }
```

- *Type:* double

---

##### `MinTo`<sup>Required</sup> <a name="MinTo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minTo"></a>

```csharp
public double MinTo { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudCssFlavorV1DiskRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

---



