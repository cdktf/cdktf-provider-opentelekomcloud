# `dataOpentelekomcloudAntiddosV1` Submodule <a name="`dataOpentelekomcloudAntiddosV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudAntiddosV1 <a name="DataOpentelekomcloudAntiddosV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1 opentelekomcloud_antiddos_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAntiddosV1(Construct Scope, string Id, DataOpentelekomcloudAntiddosV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config">DataOpentelekomcloudAntiddosV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config">DataOpentelekomcloudAntiddosV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetFloatingIpAddress">ResetFloatingIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetFloatingIpId">ResetFloatingIpId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFloatingIpAddress` <a name="ResetFloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetFloatingIpAddress"></a>

```csharp
private void ResetFloatingIpAddress()
```

##### `ResetFloatingIpId` <a name="ResetFloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetFloatingIpId"></a>

```csharp
private void ResetFloatingIpId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudAntiddosV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudAntiddosV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudAntiddosV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudAntiddosV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudAntiddosV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudAntiddosV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudAntiddosV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudAntiddosV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudAntiddosV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.bpsAttack">BpsAttack</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.bpsIn">BpsIn</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.endTime">EndTime</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.periodStart">PeriodStart</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.ppsAttack">PpsAttack</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.ppsIn">PpsIn</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.startTime">StartTime</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.totalBps">TotalBps</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.totalPps">TotalPps</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.trafficCleaningStatus">TrafficCleaningStatus</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.triggerBps">TriggerBps</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.triggerHttpPps">TriggerHttpPps</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.triggerPps">TriggerPps</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.floatingIpAddressInput">FloatingIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.floatingIpIdInput">FloatingIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.floatingIpAddress">FloatingIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.floatingIpId">FloatingIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BpsAttack`<sup>Required</sup> <a name="BpsAttack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.bpsAttack"></a>

```csharp
public double[] BpsAttack { get; }
```

- *Type:* double[]

---

##### `BpsIn`<sup>Required</sup> <a name="BpsIn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.bpsIn"></a>

```csharp
public double[] BpsIn { get; }
```

- *Type:* double[]

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.endTime"></a>

```csharp
public double[] EndTime { get; }
```

- *Type:* double[]

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `PeriodStart`<sup>Required</sup> <a name="PeriodStart" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.periodStart"></a>

```csharp
public double[] PeriodStart { get; }
```

- *Type:* double[]

---

##### `PpsAttack`<sup>Required</sup> <a name="PpsAttack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.ppsAttack"></a>

```csharp
public double[] PpsAttack { get; }
```

- *Type:* double[]

---

##### `PpsIn`<sup>Required</sup> <a name="PpsIn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.ppsIn"></a>

```csharp
public double[] PpsIn { get; }
```

- *Type:* double[]

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.startTime"></a>

```csharp
public double[] StartTime { get; }
```

- *Type:* double[]

---

##### `TotalBps`<sup>Required</sup> <a name="TotalBps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.totalBps"></a>

```csharp
public double[] TotalBps { get; }
```

- *Type:* double[]

---

##### `TotalPps`<sup>Required</sup> <a name="TotalPps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.totalPps"></a>

```csharp
public double[] TotalPps { get; }
```

- *Type:* double[]

---

##### `TrafficCleaningStatus`<sup>Required</sup> <a name="TrafficCleaningStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.trafficCleaningStatus"></a>

```csharp
public double[] TrafficCleaningStatus { get; }
```

- *Type:* double[]

---

##### `TriggerBps`<sup>Required</sup> <a name="TriggerBps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.triggerBps"></a>

```csharp
public double[] TriggerBps { get; }
```

- *Type:* double[]

---

##### `TriggerHttpPps`<sup>Required</sup> <a name="TriggerHttpPps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.triggerHttpPps"></a>

```csharp
public double[] TriggerHttpPps { get; }
```

- *Type:* double[]

---

##### `TriggerPps`<sup>Required</sup> <a name="TriggerPps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.triggerPps"></a>

```csharp
public double[] TriggerPps { get; }
```

- *Type:* double[]

---

##### `FloatingIpAddressInput`<sup>Optional</sup> <a name="FloatingIpAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.floatingIpAddressInput"></a>

```csharp
public string FloatingIpAddressInput { get; }
```

- *Type:* string

---

##### `FloatingIpIdInput`<sup>Optional</sup> <a name="FloatingIpIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.floatingIpIdInput"></a>

```csharp
public string FloatingIpIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `FloatingIpAddress`<sup>Required</sup> <a name="FloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.floatingIpAddress"></a>

```csharp
public string FloatingIpAddress { get; }
```

- *Type:* string

---

##### `FloatingIpId`<sup>Required</sup> <a name="FloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.floatingIpId"></a>

```csharp
public string FloatingIpId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudAntiddosV1Config <a name="DataOpentelekomcloudAntiddosV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAntiddosV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FloatingIpAddress = null,
    string FloatingIpId = null,
    string Id = null,
    string Region = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.floatingIpAddress">FloatingIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#floating_ip_address DataOpentelekomcloudAntiddosV1#floating_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.floatingIpId">FloatingIpId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#floating_ip_id DataOpentelekomcloudAntiddosV1#floating_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#id DataOpentelekomcloudAntiddosV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#region DataOpentelekomcloudAntiddosV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#status DataOpentelekomcloudAntiddosV1#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FloatingIpAddress`<sup>Optional</sup> <a name="FloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.floatingIpAddress"></a>

```csharp
public string FloatingIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#floating_ip_address DataOpentelekomcloudAntiddosV1#floating_ip_address}.

---

##### `FloatingIpId`<sup>Optional</sup> <a name="FloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.floatingIpId"></a>

```csharp
public string FloatingIpId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#floating_ip_id DataOpentelekomcloudAntiddosV1#floating_ip_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#id DataOpentelekomcloudAntiddosV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#region DataOpentelekomcloudAntiddosV1#region}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAntiddosV1.DataOpentelekomcloudAntiddosV1Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/data-sources/antiddos_v1#status DataOpentelekomcloudAntiddosV1#status}.

---



