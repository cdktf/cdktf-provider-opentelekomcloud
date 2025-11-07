# `dataOpentelekomcloudFgsFunctionsV2` Submodule <a name="`dataOpentelekomcloudFgsFunctionsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudFgsFunctionsV2 <a name="DataOpentelekomcloudFgsFunctionsV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2 opentelekomcloud_fgs_functions_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudFgsFunctionsV2(Construct Scope, string Id, DataOpentelekomcloudFgsFunctionsV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config">DataOpentelekomcloudFgsFunctionsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config">DataOpentelekomcloudFgsFunctionsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetEnterpriseProjectId">ResetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetPackageName">ResetPackageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetUrn">ResetUrn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnterpriseProjectId` <a name="ResetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetEnterpriseProjectId"></a>

```csharp
private void ResetEnterpriseProjectId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPackageName` <a name="ResetPackageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetPackageName"></a>

```csharp
private void ResetPackageName()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetUrn` <a name="ResetUrn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetUrn"></a>

```csharp
private void ResetUrn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudFgsFunctionsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudFgsFunctionsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudFgsFunctionsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudFgsFunctionsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudFgsFunctionsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudFgsFunctionsV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudFgsFunctionsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudFgsFunctionsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudFgsFunctionsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.functions">Functions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList">DataOpentelekomcloudFgsFunctionsV2FunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectIdInput">EnterpriseProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageNameInput">PackageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urnInput">UrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urn">Urn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.functions"></a>

```csharp
public DataOpentelekomcloudFgsFunctionsV2FunctionsList Functions { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList">DataOpentelekomcloudFgsFunctionsV2FunctionsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `EnterpriseProjectIdInput`<sup>Optional</sup> <a name="EnterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectIdInput"></a>

```csharp
public string EnterpriseProjectIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageNameInput"></a>

```csharp
public string PackageNameInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `UrnInput`<sup>Optional</sup> <a name="UrnInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urnInput"></a>

```csharp
public string UrnInput { get; }
```

- *Type:* string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urn"></a>

```csharp
public string Urn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudFgsFunctionsV2Config <a name="DataOpentelekomcloudFgsFunctionsV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudFgsFunctionsV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EnterpriseProjectId = null,
    string Id = null,
    string Name = null,
    string PackageName = null,
    string Runtime = null,
    string Urn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#enterprise_project_id DataOpentelekomcloudFgsFunctionsV2#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#id DataOpentelekomcloudFgsFunctionsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#name DataOpentelekomcloudFgsFunctionsV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.packageName">PackageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#package_name DataOpentelekomcloudFgsFunctionsV2#package_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.runtime">Runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#runtime DataOpentelekomcloudFgsFunctionsV2#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.urn">Urn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#urn DataOpentelekomcloudFgsFunctionsV2#urn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EnterpriseProjectId`<sup>Optional</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#enterprise_project_id DataOpentelekomcloudFgsFunctionsV2#enterprise_project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#id DataOpentelekomcloudFgsFunctionsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#name DataOpentelekomcloudFgsFunctionsV2#name}.

---

##### `PackageName`<sup>Optional</sup> <a name="PackageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.packageName"></a>

```csharp
public string PackageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#package_name DataOpentelekomcloudFgsFunctionsV2#package_name}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#runtime DataOpentelekomcloudFgsFunctionsV2#runtime}.

---

##### `Urn`<sup>Optional</sup> <a name="Urn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.urn"></a>

```csharp
public string Urn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/fgs_functions_v2#urn DataOpentelekomcloudFgsFunctionsV2#urn}.

---

### DataOpentelekomcloudFgsFunctionsV2Functions <a name="DataOpentelekomcloudFgsFunctionsV2Functions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudFgsFunctionsV2Functions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudFgsFunctionsV2FunctionsList <a name="DataOpentelekomcloudFgsFunctionsV2FunctionsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudFgsFunctionsV2FunctionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.get"></a>

```csharp
private DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference <a name="DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.appAgency">AppAgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeFilename">CodeFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeType">CodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeUrl">CodeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.encryptedUserData">EncryptedUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.functiongraphVersion">FunctiongraphVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.handler">Handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerHandler">InitializerHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerTimeout">InitializerTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logStreamId">LogStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.maxInstanceNum">MaxInstanceNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.memorySize">MemorySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.urn">Urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions">DataOpentelekomcloudFgsFunctionsV2Functions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppAgency`<sup>Required</sup> <a name="AppAgency" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.appAgency"></a>

```csharp
public string AppAgency { get; }
```

- *Type:* string

---

##### `CodeFilename`<sup>Required</sup> <a name="CodeFilename" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeFilename"></a>

```csharp
public string CodeFilename { get; }
```

- *Type:* string

---

##### `CodeType`<sup>Required</sup> <a name="CodeType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeType"></a>

```csharp
public string CodeType { get; }
```

- *Type:* string

---

##### `CodeUrl`<sup>Required</sup> <a name="CodeUrl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeUrl"></a>

```csharp
public string CodeUrl { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptedUserData`<sup>Required</sup> <a name="EncryptedUserData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.encryptedUserData"></a>

```csharp
public string EncryptedUserData { get; }
```

- *Type:* string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; }
```

- *Type:* string

---

##### `FunctiongraphVersion`<sup>Required</sup> <a name="FunctiongraphVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.functiongraphVersion"></a>

```csharp
public string FunctiongraphVersion { get; }
```

- *Type:* string

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.handler"></a>

```csharp
public string Handler { get; }
```

- *Type:* string

---

##### `InitializerHandler`<sup>Required</sup> <a name="InitializerHandler" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerHandler"></a>

```csharp
public string InitializerHandler { get; }
```

- *Type:* string

---

##### `InitializerTimeout`<sup>Required</sup> <a name="InitializerTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerTimeout"></a>

```csharp
public double InitializerTimeout { get; }
```

- *Type:* double

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logStreamId"></a>

```csharp
public string LogStreamId { get; }
```

- *Type:* string

---

##### `MaxInstanceNum`<sup>Required</sup> <a name="MaxInstanceNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.maxInstanceNum"></a>

```csharp
public double MaxInstanceNum { get; }
```

- *Type:* double

---

##### `MemorySize`<sup>Required</sup> <a name="MemorySize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.memorySize"></a>

```csharp
public double MemorySize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.urn"></a>

```csharp
public string Urn { get; }
```

- *Type:* string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudFgsFunctionsV2Functions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions">DataOpentelekomcloudFgsFunctionsV2Functions</a>

---



