# `dataOpentelekomcloudApigwGroupsV2` Submodule <a name="`dataOpentelekomcloudApigwGroupsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudApigwGroupsV2 <a name="DataOpentelekomcloudApigwGroupsV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2 opentelekomcloud_apigw_groups_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2(Construct Scope, string Id, DataOpentelekomcloudApigwGroupsV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config">DataOpentelekomcloudApigwGroupsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config">DataOpentelekomcloudApigwGroupsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudApigwGroupsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudApigwGroupsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudApigwGroupsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudApigwGroupsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudApigwGroupsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudApigwGroupsV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudApigwGroupsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudApigwGroupsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudApigwGroupsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groups">Groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList">DataOpentelekomcloudApigwGroupsV2GroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groups"></a>

```csharp
public DataOpentelekomcloudApigwGroupsV2GroupsList Groups { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList">DataOpentelekomcloudApigwGroupsV2GroupsList</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudApigwGroupsV2Config <a name="DataOpentelekomcloudApigwGroupsV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    string GroupId = null,
    string Id = null,
    string Name = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#instance_id DataOpentelekomcloudApigwGroupsV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#group_id DataOpentelekomcloudApigwGroupsV2#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#id DataOpentelekomcloudApigwGroupsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#name DataOpentelekomcloudApigwGroupsV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#region DataOpentelekomcloudApigwGroupsV2#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#instance_id DataOpentelekomcloudApigwGroupsV2#instance_id}.

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#group_id DataOpentelekomcloudApigwGroupsV2#group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#id DataOpentelekomcloudApigwGroupsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#name DataOpentelekomcloudApigwGroupsV2#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/apigw_groups_v2#region DataOpentelekomcloudApigwGroupsV2#region}.

---

### DataOpentelekomcloudApigwGroupsV2Groups <a name="DataOpentelekomcloudApigwGroupsV2Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Groups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Groups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2Groups {

};
```


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironment <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironment" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsEnvironment {

};
```


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable {

};
```


### DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains <a name="DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.get"></a>

```csharp
private DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironment">DataOpentelekomcloudApigwGroupsV2GroupsEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.variable"></a>

```csharp
public DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList Variable { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudApigwGroupsV2GroupsEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironment">DataOpentelekomcloudApigwGroupsV2GroupsEnvironment</a>

---


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.get"></a>

```csharp
private DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable</a>

---


### DataOpentelekomcloudApigwGroupsV2GroupsList <a name="DataOpentelekomcloudApigwGroupsV2GroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.get"></a>

```csharp
private DataOpentelekomcloudApigwGroupsV2GroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudApigwGroupsV2GroupsOutputReference <a name="DataOpentelekomcloudApigwGroupsV2GroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.isDefault">IsDefault</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.onSellStatus">OnSellStatus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.slDomain">SlDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.slDomains">SlDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.urlDomains">UrlDomains</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList">DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Groups">DataOpentelekomcloudApigwGroupsV2Groups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.environment"></a>

```csharp
public DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList Environment { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.isDefault"></a>

```csharp
public double IsDefault { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnSellStatus`<sup>Required</sup> <a name="OnSellStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.onSellStatus"></a>

```csharp
public double OnSellStatus { get; }
```

- *Type:* double

---

##### `SlDomain`<sup>Required</sup> <a name="SlDomain" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.slDomain"></a>

```csharp
public string SlDomain { get; }
```

- *Type:* string

---

##### `SlDomains`<sup>Required</sup> <a name="SlDomains" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.slDomains"></a>

```csharp
public string[] SlDomains { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UrlDomains`<sup>Required</sup> <a name="UrlDomains" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.urlDomains"></a>

```csharp
public DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList UrlDomains { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList">DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudApigwGroupsV2Groups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Groups">DataOpentelekomcloudApigwGroupsV2Groups</a>

---


### DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList <a name="DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.get"></a>

```csharp
private DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference <a name="DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.cnameStatus">CnameStatus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.isHasTrustedRootCa">IsHasTrustedRootCa</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.minSslVersion">MinSslVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.sslId">SslId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.sslName">SslName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.verifiedClientCertificateEnabled">VerifiedClientCertificateEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains">DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CnameStatus`<sup>Required</sup> <a name="CnameStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.cnameStatus"></a>

```csharp
public double CnameStatus { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsHasTrustedRootCa`<sup>Required</sup> <a name="IsHasTrustedRootCa" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.isHasTrustedRootCa"></a>

```csharp
public IResolvable IsHasTrustedRootCa { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MinSslVersion`<sup>Required</sup> <a name="MinSslVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.minSslVersion"></a>

```csharp
public string MinSslVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SslId`<sup>Required</sup> <a name="SslId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.sslId"></a>

```csharp
public string SslId { get; }
```

- *Type:* string

---

##### `SslName`<sup>Required</sup> <a name="SslName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.sslName"></a>

```csharp
public string SslName { get; }
```

- *Type:* string

---

##### `VerifiedClientCertificateEnabled`<sup>Required</sup> <a name="VerifiedClientCertificateEnabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.verifiedClientCertificateEnabled"></a>

```csharp
public IResolvable VerifiedClientCertificateEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains">DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains</a>

---



