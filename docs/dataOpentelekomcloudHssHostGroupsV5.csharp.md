# `dataOpentelekomcloudHssHostGroupsV5` Submodule <a name="`dataOpentelekomcloudHssHostGroupsV5` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudHssHostGroupsV5 <a name="DataOpentelekomcloudHssHostGroupsV5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5 opentelekomcloud_hss_host_groups_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudHssHostGroupsV5(Construct Scope, string Id, DataOpentelekomcloudHssHostGroupsV5Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config">DataOpentelekomcloudHssHostGroupsV5Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config">DataOpentelekomcloudHssHostGroupsV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetHostNum">ResetHostNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetRiskHostNum">ResetRiskHostNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetUnprotectHostNum">ResetUnprotectHostNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetHostNum` <a name="ResetHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetHostNum"></a>

```csharp
private void ResetHostNum()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRiskHostNum` <a name="ResetRiskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetRiskHostNum"></a>

```csharp
private void ResetRiskHostNum()
```

##### `ResetUnprotectHostNum` <a name="ResetUnprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetUnprotectHostNum"></a>

```csharp
private void ResetUnprotectHostNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudHssHostGroupsV5 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudHssHostGroupsV5.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudHssHostGroupsV5.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudHssHostGroupsV5.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudHssHostGroupsV5.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudHssHostGroupsV5 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudHssHostGroupsV5 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudHssHostGroupsV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudHssHostGroupsV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groups">Groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList">DataOpentelekomcloudHssHostGroupsV5GroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNumInput">HostNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNumInput">RiskHostNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNumInput">UnprotectHostNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNum">HostNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNum">RiskHostNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNum">UnprotectHostNum</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groups"></a>

```csharp
public DataOpentelekomcloudHssHostGroupsV5GroupsList Groups { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList">DataOpentelekomcloudHssHostGroupsV5GroupsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `HostNumInput`<sup>Optional</sup> <a name="HostNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNumInput"></a>

```csharp
public string HostNumInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RiskHostNumInput`<sup>Optional</sup> <a name="RiskHostNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNumInput"></a>

```csharp
public string RiskHostNumInput { get; }
```

- *Type:* string

---

##### `UnprotectHostNumInput`<sup>Optional</sup> <a name="UnprotectHostNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNumInput"></a>

```csharp
public string UnprotectHostNumInput { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `HostNum`<sup>Required</sup> <a name="HostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNum"></a>

```csharp
public string HostNum { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RiskHostNum`<sup>Required</sup> <a name="RiskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNum"></a>

```csharp
public string RiskHostNum { get; }
```

- *Type:* string

---

##### `UnprotectHostNum`<sup>Required</sup> <a name="UnprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNum"></a>

```csharp
public string UnprotectHostNum { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudHssHostGroupsV5Config <a name="DataOpentelekomcloudHssHostGroupsV5Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudHssHostGroupsV5Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupId = null,
    string HostNum = null,
    string Id = null,
    string Name = null,
    string RiskHostNum = null,
    string UnprotectHostNum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.hostNum">HostNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.riskHostNum">RiskHostNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.unprotectHostNum">UnprotectHostNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}.

---

##### `HostNum`<sup>Optional</sup> <a name="HostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.hostNum"></a>

```csharp
public string HostNum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}.

---

##### `RiskHostNum`<sup>Optional</sup> <a name="RiskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.riskHostNum"></a>

```csharp
public string RiskHostNum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}.

---

##### `UnprotectHostNum`<sup>Optional</sup> <a name="UnprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.unprotectHostNum"></a>

```csharp
public string UnprotectHostNum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}.

---

### DataOpentelekomcloudHssHostGroupsV5Groups <a name="DataOpentelekomcloudHssHostGroupsV5Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudHssHostGroupsV5Groups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudHssHostGroupsV5GroupsList <a name="DataOpentelekomcloudHssHostGroupsV5GroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudHssHostGroupsV5GroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get"></a>

```csharp
private DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference <a name="DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostIds">HostIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostNum">HostNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.riskHostNum">RiskHostNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.unprotectHostNum">UnprotectHostNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups">DataOpentelekomcloudHssHostGroupsV5Groups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostIds`<sup>Required</sup> <a name="HostIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostIds"></a>

```csharp
public string[] HostIds { get; }
```

- *Type:* string[]

---

##### `HostNum`<sup>Required</sup> <a name="HostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostNum"></a>

```csharp
public double HostNum { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RiskHostNum`<sup>Required</sup> <a name="RiskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.riskHostNum"></a>

```csharp
public double RiskHostNum { get; }
```

- *Type:* double

---

##### `UnprotectHostNum`<sup>Required</sup> <a name="UnprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.unprotectHostNum"></a>

```csharp
public double UnprotectHostNum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudHssHostGroupsV5Groups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups">DataOpentelekomcloudHssHostGroupsV5Groups</a>

---



