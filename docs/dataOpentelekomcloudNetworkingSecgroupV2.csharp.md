# `dataOpentelekomcloudNetworkingSecgroupV2` Submodule <a name="`dataOpentelekomcloudNetworkingSecgroupV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNetworkingSecgroupV2 <a name="DataOpentelekomcloudNetworkingSecgroupV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2 opentelekomcloud_networking_secgroup_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudNetworkingSecgroupV2(Construct Scope, string Id, DataOpentelekomcloudNetworkingSecgroupV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config">DataOpentelekomcloudNetworkingSecgroupV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config">DataOpentelekomcloudNetworkingSecgroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetNameRegex">ResetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetSecgroupId">ResetSecgroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameRegex` <a name="ResetNameRegex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetNameRegex"></a>

```csharp
private void ResetNameRegex()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecgroupId` <a name="ResetSecgroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetSecgroupId"></a>

```csharp
private void ResetSecgroupId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudNetworkingSecgroupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudNetworkingSecgroupV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudNetworkingSecgroupV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudNetworkingSecgroupV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudNetworkingSecgroupV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudNetworkingSecgroupV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudNetworkingSecgroupV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudNetworkingSecgroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudNetworkingSecgroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.nameRegexInput">NameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.secgroupIdInput">SecgroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.nameRegex">NameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.secgroupId">SecgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.nameRegexInput"></a>

```csharp
public string NameRegexInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecgroupIdInput`<sup>Optional</sup> <a name="SecgroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.secgroupIdInput"></a>

```csharp
public string SecgroupIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.nameRegex"></a>

```csharp
public string NameRegex { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecgroupId`<sup>Required</sup> <a name="SecgroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.secgroupId"></a>

```csharp
public string SecgroupId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNetworkingSecgroupV2Config <a name="DataOpentelekomcloudNetworkingSecgroupV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudNetworkingSecgroupV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    string NameRegex = null,
    string Region = null,
    string SecgroupId = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#id DataOpentelekomcloudNetworkingSecgroupV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#name DataOpentelekomcloudNetworkingSecgroupV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.nameRegex">NameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#name_regex DataOpentelekomcloudNetworkingSecgroupV2#name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#region DataOpentelekomcloudNetworkingSecgroupV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.secgroupId">SecgroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#secgroup_id DataOpentelekomcloudNetworkingSecgroupV2#secgroup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#tenant_id DataOpentelekomcloudNetworkingSecgroupV2#tenant_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#id DataOpentelekomcloudNetworkingSecgroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#name DataOpentelekomcloudNetworkingSecgroupV2#name}.

---

##### `NameRegex`<sup>Optional</sup> <a name="NameRegex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.nameRegex"></a>

```csharp
public string NameRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#name_regex DataOpentelekomcloudNetworkingSecgroupV2#name_regex}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#region DataOpentelekomcloudNetworkingSecgroupV2#region}.

---

##### `SecgroupId`<sup>Optional</sup> <a name="SecgroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.secgroupId"></a>

```csharp
public string SecgroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#secgroup_id DataOpentelekomcloudNetworkingSecgroupV2#secgroup_id}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingSecgroupV2.DataOpentelekomcloudNetworkingSecgroupV2Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/data-sources/networking_secgroup_v2#tenant_id DataOpentelekomcloudNetworkingSecgroupV2#tenant_id}.

---



