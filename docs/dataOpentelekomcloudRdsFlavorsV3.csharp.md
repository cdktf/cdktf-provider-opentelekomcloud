# `dataOpentelekomcloudRdsFlavorsV3` Submodule <a name="`dataOpentelekomcloudRdsFlavorsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRdsFlavorsV3 <a name="DataOpentelekomcloudRdsFlavorsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3 opentelekomcloud_rds_flavors_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRdsFlavorsV3(Construct Scope, string Id, DataOpentelekomcloudRdsFlavorsV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config">DataOpentelekomcloudRdsFlavorsV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config">DataOpentelekomcloudRdsFlavorsV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRdsFlavorsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRdsFlavorsV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRdsFlavorsV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRdsFlavorsV3.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRdsFlavorsV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudRdsFlavorsV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudRdsFlavorsV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudRdsFlavorsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRdsFlavorsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.flavors">Flavors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList">DataOpentelekomcloudRdsFlavorsV3FlavorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbTypeInput">DbTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.instanceModeInput">InstanceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbType">DbType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.instanceMode">InstanceMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Flavors`<sup>Required</sup> <a name="Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.flavors"></a>

```csharp
public DataOpentelekomcloudRdsFlavorsV3FlavorsList Flavors { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList">DataOpentelekomcloudRdsFlavorsV3FlavorsList</a>

---

##### `DbTypeInput`<sup>Optional</sup> <a name="DbTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbTypeInput"></a>

```csharp
public string DbTypeInput { get; }
```

- *Type:* string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceModeInput`<sup>Optional</sup> <a name="InstanceModeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.instanceModeInput"></a>

```csharp
public string InstanceModeInput { get; }
```

- *Type:* string

---

##### `DbType`<sup>Required</sup> <a name="DbType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbType"></a>

```csharp
public string DbType { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceMode`<sup>Required</sup> <a name="InstanceMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.instanceMode"></a>

```csharp
public string InstanceMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRdsFlavorsV3Config <a name="DataOpentelekomcloudRdsFlavorsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRdsFlavorsV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DbType,
    string DbVersion,
    string InstanceMode,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dbType">DbType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3#db_type DataOpentelekomcloudRdsFlavorsV3#db_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dbVersion">DbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3#db_version DataOpentelekomcloudRdsFlavorsV3#db_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.instanceMode">InstanceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3#instance_mode DataOpentelekomcloudRdsFlavorsV3#instance_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3#id DataOpentelekomcloudRdsFlavorsV3#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DbType`<sup>Required</sup> <a name="DbType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dbType"></a>

```csharp
public string DbType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3#db_type DataOpentelekomcloudRdsFlavorsV3#db_type}.

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3#db_version DataOpentelekomcloudRdsFlavorsV3#db_version}.

---

##### `InstanceMode`<sup>Required</sup> <a name="InstanceMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.instanceMode"></a>

```csharp
public string InstanceMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3#instance_mode DataOpentelekomcloudRdsFlavorsV3#instance_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rds_flavors_v3#id DataOpentelekomcloudRdsFlavorsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudRdsFlavorsV3Flavors <a name="DataOpentelekomcloudRdsFlavorsV3Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Flavors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Flavors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRdsFlavorsV3Flavors {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudRdsFlavorsV3FlavorsList <a name="DataOpentelekomcloudRdsFlavorsV3FlavorsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRdsFlavorsV3FlavorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.get"></a>

```csharp
private DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference <a name="DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.azStatus">AzStatus</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.vcpus">Vcpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Flavors">DataOpentelekomcloudRdsFlavorsV3Flavors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzStatus`<sup>Required</sup> <a name="AzStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.azStatus"></a>

```csharp
public StringMap AzStatus { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.vcpus"></a>

```csharp
public string Vcpus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudRdsFlavorsV3Flavors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Flavors">DataOpentelekomcloudRdsFlavorsV3Flavors</a>

---



