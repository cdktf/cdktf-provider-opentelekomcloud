# `dataOpentelekomcloudTmsResourceTypesV1` Submodule <a name="`dataOpentelekomcloudTmsResourceTypesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTmsResourceTypesV1 <a name="DataOpentelekomcloudTmsResourceTypesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_resource_types_v1 opentelekomcloud_tms_resource_types_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudTmsResourceTypesV1(Construct Scope, string Id, DataOpentelekomcloudTmsResourceTypesV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config">DataOpentelekomcloudTmsResourceTypesV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config">DataOpentelekomcloudTmsResourceTypesV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTmsResourceTypesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudTmsResourceTypesV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudTmsResourceTypesV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudTmsResourceTypesV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudTmsResourceTypesV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudTmsResourceTypesV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudTmsResourceTypesV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudTmsResourceTypesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_resource_types_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTmsResourceTypesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.types">Types</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList">DataOpentelekomcloudTmsResourceTypesV1TypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.types"></a>

```csharp
public DataOpentelekomcloudTmsResourceTypesV1TypesList Types { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList">DataOpentelekomcloudTmsResourceTypesV1TypesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTmsResourceTypesV1Config <a name="DataOpentelekomcloudTmsResourceTypesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudTmsResourceTypesV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Region = null,
    string ServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_resource_types_v1#id DataOpentelekomcloudTmsResourceTypesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_resource_types_v1#region DataOpentelekomcloudTmsResourceTypesV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_resource_types_v1#service_name DataOpentelekomcloudTmsResourceTypesV1#service_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_resource_types_v1#id DataOpentelekomcloudTmsResourceTypesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_resource_types_v1#region DataOpentelekomcloudTmsResourceTypesV1#region}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_resource_types_v1#service_name DataOpentelekomcloudTmsResourceTypesV1#service_name}.

---

### DataOpentelekomcloudTmsResourceTypesV1Types <a name="DataOpentelekomcloudTmsResourceTypesV1Types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Types"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Types.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudTmsResourceTypesV1Types {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTmsResourceTypesV1TypesList <a name="DataOpentelekomcloudTmsResourceTypesV1TypesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudTmsResourceTypesV1TypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.get"></a>

```csharp
private DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference <a name="DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.isGlobal">IsGlobal</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Types">DataOpentelekomcloudTmsResourceTypesV1Types</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsGlobal`<sup>Required</sup> <a name="IsGlobal" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.isGlobal"></a>

```csharp
public IResolvable IsGlobal { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudTmsResourceTypesV1Types InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Types">DataOpentelekomcloudTmsResourceTypesV1Types</a>

---



