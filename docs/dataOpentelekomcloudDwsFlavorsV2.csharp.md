# `dataOpentelekomcloudDwsFlavorsV2` Submodule <a name="`dataOpentelekomcloudDwsFlavorsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDwsFlavorsV2 <a name="DataOpentelekomcloudDwsFlavorsV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2 opentelekomcloud_dws_flavors_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudDwsFlavorsV2(Construct Scope, string Id, DataOpentelekomcloudDwsFlavorsV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config">DataOpentelekomcloudDwsFlavorsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config">DataOpentelekomcloudDwsFlavorsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetVcpus">ResetVcpus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVcpus` <a name="ResetVcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetVcpus"></a>

```csharp
private void ResetVcpus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDwsFlavorsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudDwsFlavorsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudDwsFlavorsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudDwsFlavorsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudDwsFlavorsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudDwsFlavorsV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudDwsFlavorsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudDwsFlavorsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDwsFlavorsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.flavors">Flavors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList">DataOpentelekomcloudDwsFlavorsV2FlavorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.vcpusInput">VcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.vcpus">Vcpus</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Flavors`<sup>Required</sup> <a name="Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.flavors"></a>

```csharp
public DataOpentelekomcloudDwsFlavorsV2FlavorsList Flavors { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList">DataOpentelekomcloudDwsFlavorsV2FlavorsList</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VcpusInput`<sup>Optional</sup> <a name="VcpusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.vcpusInput"></a>

```csharp
public double VcpusInput { get; }
```

- *Type:* double

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.vcpus"></a>

```csharp
public double Vcpus { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDwsFlavorsV2Config <a name="DataOpentelekomcloudDwsFlavorsV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudDwsFlavorsV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone = null,
    string Id = null,
    double Memory = null,
    string Region = null,
    double Vcpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#availability_zone DataOpentelekomcloudDwsFlavorsV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#id DataOpentelekomcloudDwsFlavorsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.memory">Memory</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#memory DataOpentelekomcloudDwsFlavorsV2#memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#region DataOpentelekomcloudDwsFlavorsV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.vcpus">Vcpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#vcpus DataOpentelekomcloudDwsFlavorsV2#vcpus}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#availability_zone DataOpentelekomcloudDwsFlavorsV2#availability_zone}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#id DataOpentelekomcloudDwsFlavorsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#memory DataOpentelekomcloudDwsFlavorsV2#memory}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#region DataOpentelekomcloudDwsFlavorsV2#region}.

---

##### `Vcpus`<sup>Optional</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.vcpus"></a>

```csharp
public double Vcpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/dws_flavors_v2#vcpus DataOpentelekomcloudDwsFlavorsV2#vcpus}.

---

### DataOpentelekomcloudDwsFlavorsV2Flavors <a name="DataOpentelekomcloudDwsFlavorsV2Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Flavors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Flavors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudDwsFlavorsV2Flavors {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDwsFlavorsV2FlavorsList <a name="DataOpentelekomcloudDwsFlavorsV2FlavorsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudDwsFlavorsV2FlavorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.get"></a>

```csharp
private DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference <a name="DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.flavorId">FlavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.vcpus">Vcpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.volumetype">Volumetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Flavors">DataOpentelekomcloudDwsFlavorsV2Flavors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.flavorId"></a>

```csharp
public string FlavorId { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.vcpus"></a>

```csharp
public double Vcpus { get; }
```

- *Type:* double

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.volumetype"></a>

```csharp
public string Volumetype { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudDwsFlavorsV2Flavors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Flavors">DataOpentelekomcloudDwsFlavorsV2Flavors</a>

---



