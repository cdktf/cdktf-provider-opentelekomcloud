# `dataOpentelekomcloudPrivateNatTransitIpV3` Submodule <a name="`dataOpentelekomcloudPrivateNatTransitIpV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudPrivateNatTransitIpV3 <a name="DataOpentelekomcloudPrivateNatTransitIpV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/private_nat_transit_ip_v3 opentelekomcloud_private_nat_transit_ip_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatTransitIpV3(Construct Scope, string Id, DataOpentelekomcloudPrivateNatTransitIpV3Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config">DataOpentelekomcloudPrivateNatTransitIpV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config">DataOpentelekomcloudPrivateNatTransitIpV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetVirsubnetId">ResetVirsubnetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetVirsubnetId` <a name="ResetVirsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetVirsubnetId"></a>

```csharp
private void ResetVirsubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatTransitIpV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudPrivateNatTransitIpV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudPrivateNatTransitIpV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudPrivateNatTransitIpV3.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudPrivateNatTransitIpV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatTransitIpV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudPrivateNatTransitIpV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudPrivateNatTransitIpV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/private_nat_transit_ip_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudPrivateNatTransitIpV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.transitIps">TransitIps</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList">DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.virsubnetIdInput">VirsubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.virsubnetId">VirsubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `TransitIps`<sup>Required</sup> <a name="TransitIps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.transitIps"></a>

```csharp
public DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList TransitIps { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList">DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `VirsubnetIdInput`<sup>Optional</sup> <a name="VirsubnetIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.virsubnetIdInput"></a>

```csharp
public string VirsubnetIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `VirsubnetId`<sup>Required</sup> <a name="VirsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.virsubnetId"></a>

```csharp
public string VirsubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudPrivateNatTransitIpV3Config <a name="DataOpentelekomcloudPrivateNatTransitIpV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatTransitIpV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string IpAddress = null,
    string VirsubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/private_nat_transit_ip_v3#id DataOpentelekomcloudPrivateNatTransitIpV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/private_nat_transit_ip_v3#ip_address DataOpentelekomcloudPrivateNatTransitIpV3#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.virsubnetId">VirsubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/private_nat_transit_ip_v3#virsubnet_id DataOpentelekomcloudPrivateNatTransitIpV3#virsubnet_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/private_nat_transit_ip_v3#id DataOpentelekomcloudPrivateNatTransitIpV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/private_nat_transit_ip_v3#ip_address DataOpentelekomcloudPrivateNatTransitIpV3#ip_address}.

---

##### `VirsubnetId`<sup>Optional</sup> <a name="VirsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.virsubnetId"></a>

```csharp
public string VirsubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/private_nat_transit_ip_v3#virsubnet_id DataOpentelekomcloudPrivateNatTransitIpV3#virsubnet_id}.

---

### DataOpentelekomcloudPrivateNatTransitIpV3TransitIps <a name="DataOpentelekomcloudPrivateNatTransitIpV3TransitIps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatTransitIpV3TransitIps {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList <a name="DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.get"></a>

```csharp
private DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference <a name="DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.virsubnetId">VirsubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIps">DataOpentelekomcloudPrivateNatTransitIpV3TransitIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `VirsubnetId`<sup>Required</sup> <a name="VirsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.virsubnetId"></a>

```csharp
public string VirsubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudPrivateNatTransitIpV3TransitIps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIps">DataOpentelekomcloudPrivateNatTransitIpV3TransitIps</a>

---



