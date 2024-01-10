# `dataOpentelekomcloudComputeBmsServerV2` Submodule <a name="`dataOpentelekomcloudComputeBmsServerV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeBmsServerV2 <a name="DataOpentelekomcloudComputeBmsServerV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2 opentelekomcloud_compute_bms_server_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeBmsServerV2(Construct Scope, string Id, DataOpentelekomcloudComputeBmsServerV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config">DataOpentelekomcloudComputeBmsServerV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config">DataOpentelekomcloudComputeBmsServerV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetFlavorId">ResetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetHostStatus">ResetHostStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFlavorId` <a name="ResetFlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetFlavorId"></a>

```csharp
private void ResetFlavorId()
```

##### `ResetHostStatus` <a name="ResetHostStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetHostStatus"></a>

```csharp
private void ResetHostStatus()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudComputeBmsServerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudComputeBmsServerV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudComputeBmsServerV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudComputeBmsServerV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudComputeBmsServerV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudComputeBmsServerV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudComputeBmsServerV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudComputeBmsServerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudComputeBmsServerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV4">AccessIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV6">AccessIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.configDrive">ConfigDrive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hypervisorHostname">HypervisorHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.kernelId">KernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.locked">Locked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.network">Network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList">DataOpentelekomcloudComputeBmsServerV2NetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.progress">Progress</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.securityGroups">SecurityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList">DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatusInput">HostStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorId">FlavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatus">HostStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessIpV4`<sup>Required</sup> <a name="AccessIpV4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV4"></a>

```csharp
public string AccessIpV4 { get; }
```

- *Type:* string

---

##### `AccessIpV6`<sup>Required</sup> <a name="AccessIpV6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV6"></a>

```csharp
public string AccessIpV6 { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `ConfigDrive`<sup>Required</sup> <a name="ConfigDrive" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.configDrive"></a>

```csharp
public string ConfigDrive { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `HypervisorHostname`<sup>Required</sup> <a name="HypervisorHostname" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hypervisorHostname"></a>

```csharp
public string HypervisorHostname { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.kernelId"></a>

```csharp
public string KernelId { get; }
```

- *Type:* string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.locked"></a>

```csharp
public IResolvable Locked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.network"></a>

```csharp
public DataOpentelekomcloudComputeBmsServerV2NetworkList Network { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList">DataOpentelekomcloudComputeBmsServerV2NetworkList</a>

---

##### `Progress`<sup>Required</sup> <a name="Progress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.progress"></a>

```csharp
public double Progress { get; }
```

- *Type:* double

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.securityGroups"></a>

```csharp
public DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList SecurityGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList">DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorIdInput"></a>

```csharp
public string FlavorIdInput { get; }
```

- *Type:* string

---

##### `HostStatusInput`<sup>Optional</sup> <a name="HostStatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatusInput"></a>

```csharp
public string HostStatusInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorId"></a>

```csharp
public string FlavorId { get; }
```

- *Type:* string

---

##### `HostStatus`<sup>Required</sup> <a name="HostStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatus"></a>

```csharp
public string HostStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeBmsServerV2Config <a name="DataOpentelekomcloudComputeBmsServerV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeBmsServerV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FlavorId = null,
    string HostStatus = null,
    string Id = null,
    string ImageId = null,
    string KeyName = null,
    string Name = null,
    string Region = null,
    string Status = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.flavorId">FlavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#flavor_id DataOpentelekomcloudComputeBmsServerV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.hostStatus">HostStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#host_status DataOpentelekomcloudComputeBmsServerV2#host_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#id DataOpentelekomcloudComputeBmsServerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#image_id DataOpentelekomcloudComputeBmsServerV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#key_name DataOpentelekomcloudComputeBmsServerV2#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#name DataOpentelekomcloudComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#region DataOpentelekomcloudComputeBmsServerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#status DataOpentelekomcloudComputeBmsServerV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#user_id DataOpentelekomcloudComputeBmsServerV2#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FlavorId`<sup>Optional</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.flavorId"></a>

```csharp
public string FlavorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#flavor_id DataOpentelekomcloudComputeBmsServerV2#flavor_id}.

---

##### `HostStatus`<sup>Optional</sup> <a name="HostStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.hostStatus"></a>

```csharp
public string HostStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#host_status DataOpentelekomcloudComputeBmsServerV2#host_status}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#id DataOpentelekomcloudComputeBmsServerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#image_id DataOpentelekomcloudComputeBmsServerV2#image_id}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#key_name DataOpentelekomcloudComputeBmsServerV2#key_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#name DataOpentelekomcloudComputeBmsServerV2#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#region DataOpentelekomcloudComputeBmsServerV2#region}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#status DataOpentelekomcloudComputeBmsServerV2#status}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/data-sources/compute_bms_server_v2#user_id DataOpentelekomcloudComputeBmsServerV2#user_id}.

---

### DataOpentelekomcloudComputeBmsServerV2Network <a name="DataOpentelekomcloudComputeBmsServerV2Network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeBmsServerV2Network {

};
```


### DataOpentelekomcloudComputeBmsServerV2SecurityGroups <a name="DataOpentelekomcloudComputeBmsServerV2SecurityGroups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeBmsServerV2SecurityGroups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudComputeBmsServerV2NetworkList <a name="DataOpentelekomcloudComputeBmsServerV2NetworkList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeBmsServerV2NetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.get"></a>

```csharp
private DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference <a name="DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.mac">Mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network">DataOpentelekomcloudComputeBmsServerV2Network</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.mac"></a>

```csharp
public string Mac { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudComputeBmsServerV2Network InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network">DataOpentelekomcloudComputeBmsServerV2Network</a>

---


### DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList <a name="DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.get"></a>

```csharp
private DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference <a name="DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups">DataOpentelekomcloudComputeBmsServerV2SecurityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudComputeBmsServerV2SecurityGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups">DataOpentelekomcloudComputeBmsServerV2SecurityGroups</a>

---



