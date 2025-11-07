# `dataOpentelekomcloudCesEventDetailsV1` Submodule <a name="`dataOpentelekomcloudCesEventDetailsV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesEventDetailsV1 <a name="DataOpentelekomcloudCesEventDetailsV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1 opentelekomcloud_ces_event_details_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1(Construct Scope, string Id, DataOpentelekomcloudCesEventDetailsV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config">DataOpentelekomcloudCesEventDetailsV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config">DataOpentelekomcloudCesEventDetailsV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventLevel">ResetEventLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventState">ResetEventState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventUser">ResetEventUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEventLevel` <a name="ResetEventLevel" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventLevel"></a>

```csharp
private void ResetEventLevel()
```

##### `ResetEventSource` <a name="ResetEventSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventSource"></a>

```csharp
private void ResetEventSource()
```

##### `ResetEventState` <a name="ResetEventState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventState"></a>

```csharp
private void ResetEventState()
```

##### `ResetEventUser` <a name="ResetEventUser" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetEventUser"></a>

```csharp
private void ResetEventUser()
```

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.resetTo"></a>

```csharp
private void ResetTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesEventDetailsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCesEventDetailsV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCesEventDetailsV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCesEventDetailsV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCesEventDetailsV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudCesEventDetailsV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCesEventDetailsV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCesEventDetailsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesEventDetailsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventInfo">EventInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList">DataOpentelekomcloudCesEventDetailsV1EventInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSources">EventSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUsers">EventUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.metaData">MetaData</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList">DataOpentelekomcloudCesEventDetailsV1MetaDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventLevelInput">EventLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventNameInput">EventNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSourceInput">EventSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventStateInput">EventStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUserInput">EventUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.fromInput">FromInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.toInput">ToInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventLevel">EventLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventName">EventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSource">EventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventState">EventState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUser">EventUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.from">From</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.to">To</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EventInfo`<sup>Required</sup> <a name="EventInfo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventInfo"></a>

```csharp
public DataOpentelekomcloudCesEventDetailsV1EventInfoList EventInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList">DataOpentelekomcloudCesEventDetailsV1EventInfoList</a>

---

##### `EventSources`<sup>Required</sup> <a name="EventSources" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSources"></a>

```csharp
public string[] EventSources { get; }
```

- *Type:* string[]

---

##### `EventUsers`<sup>Required</sup> <a name="EventUsers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUsers"></a>

```csharp
public string[] EventUsers { get; }
```

- *Type:* string[]

---

##### `MetaData`<sup>Required</sup> <a name="MetaData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.metaData"></a>

```csharp
public DataOpentelekomcloudCesEventDetailsV1MetaDataList MetaData { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList">DataOpentelekomcloudCesEventDetailsV1MetaDataList</a>

---

##### `EventLevelInput`<sup>Optional</sup> <a name="EventLevelInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventLevelInput"></a>

```csharp
public string EventLevelInput { get; }
```

- *Type:* string

---

##### `EventNameInput`<sup>Optional</sup> <a name="EventNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventNameInput"></a>

```csharp
public string EventNameInput { get; }
```

- *Type:* string

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSourceInput"></a>

```csharp
public string EventSourceInput { get; }
```

- *Type:* string

---

##### `EventStateInput`<sup>Optional</sup> <a name="EventStateInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventStateInput"></a>

```csharp
public string EventStateInput { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `EventUserInput`<sup>Optional</sup> <a name="EventUserInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUserInput"></a>

```csharp
public string EventUserInput { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.fromInput"></a>

```csharp
public double FromInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.toInput"></a>

```csharp
public double ToInput { get; }
```

- *Type:* double

---

##### `EventLevel`<sup>Required</sup> <a name="EventLevel" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventLevel"></a>

```csharp
public string EventLevel { get; }
```

- *Type:* string

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventName"></a>

```csharp
public string EventName { get; }
```

- *Type:* string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventSource"></a>

```csharp
public string EventSource { get; }
```

- *Type:* string

---

##### `EventState`<sup>Required</sup> <a name="EventState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventState"></a>

```csharp
public string EventState { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `EventUser`<sup>Required</sup> <a name="EventUser" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.eventUser"></a>

```csharp
public string EventUser { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.from"></a>

```csharp
public double From { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.to"></a>

```csharp
public double To { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesEventDetailsV1Config <a name="DataOpentelekomcloudCesEventDetailsV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EventName,
    string EventType,
    string EventLevel = null,
    string EventSource = null,
    string EventState = null,
    string EventUser = null,
    double From = null,
    string Id = null,
    double Limit = null,
    double To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventName">EventName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_name DataOpentelekomcloudCesEventDetailsV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_type DataOpentelekomcloudCesEventDetailsV1#event_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventLevel">EventLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_level DataOpentelekomcloudCesEventDetailsV1#event_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventSource">EventSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_source DataOpentelekomcloudCesEventDetailsV1#event_source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventState">EventState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_state DataOpentelekomcloudCesEventDetailsV1#event_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventUser">EventUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_user DataOpentelekomcloudCesEventDetailsV1#event_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.from">From</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#from DataOpentelekomcloudCesEventDetailsV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#id DataOpentelekomcloudCesEventDetailsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.limit">Limit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#limit DataOpentelekomcloudCesEventDetailsV1#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.to">To</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#to DataOpentelekomcloudCesEventDetailsV1#to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventName"></a>

```csharp
public string EventName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_name DataOpentelekomcloudCesEventDetailsV1#event_name}.

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_type DataOpentelekomcloudCesEventDetailsV1#event_type}.

---

##### `EventLevel`<sup>Optional</sup> <a name="EventLevel" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventLevel"></a>

```csharp
public string EventLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_level DataOpentelekomcloudCesEventDetailsV1#event_level}.

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventSource"></a>

```csharp
public string EventSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_source DataOpentelekomcloudCesEventDetailsV1#event_source}.

---

##### `EventState`<sup>Optional</sup> <a name="EventState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventState"></a>

```csharp
public string EventState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_state DataOpentelekomcloudCesEventDetailsV1#event_state}.

---

##### `EventUser`<sup>Optional</sup> <a name="EventUser" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.eventUser"></a>

```csharp
public string EventUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#event_user DataOpentelekomcloudCesEventDetailsV1#event_user}.

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.from"></a>

```csharp
public double From { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#from DataOpentelekomcloudCesEventDetailsV1#from}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#id DataOpentelekomcloudCesEventDetailsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#limit DataOpentelekomcloudCesEventDetailsV1#limit}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1Config.property.to"></a>

```csharp
public double To { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/ces_event_details_v1#to DataOpentelekomcloudCesEventDetailsV1#to}.

---

### DataOpentelekomcloudCesEventDetailsV1EventInfo <a name="DataOpentelekomcloudCesEventDetailsV1EventInfo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1EventInfo {

};
```


### DataOpentelekomcloudCesEventDetailsV1EventInfoDetail <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoDetail" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1EventInfoDetail {

};
```


### DataOpentelekomcloudCesEventDetailsV1MetaData <a name="DataOpentelekomcloudCesEventDetailsV1MetaData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1MetaData {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.get"></a>

```csharp
private DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventLevel">EventLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventState">EventState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventUser">EventUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetail">DataOpentelekomcloudCesEventDetailsV1EventInfoDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `EventLevel`<sup>Required</sup> <a name="EventLevel" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventLevel"></a>

```csharp
public string EventLevel { get; }
```

- *Type:* string

---

##### `EventState`<sup>Required</sup> <a name="EventState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventState"></a>

```csharp
public string EventState { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `EventUser`<sup>Required</sup> <a name="EventUser" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.eventUser"></a>

```csharp
public string EventUser { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudCesEventDetailsV1EventInfoDetail InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetail">DataOpentelekomcloudCesEventDetailsV1EventInfoDetail</a>

---


### DataOpentelekomcloudCesEventDetailsV1EventInfoList <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1EventInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.get"></a>

```csharp
private DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference <a name="DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.detail">Detail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList">DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventId">EventId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventName">EventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventSource">EventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.time">Time</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfo">DataOpentelekomcloudCesEventDetailsV1EventInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.detail"></a>

```csharp
public DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList Detail { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList">DataOpentelekomcloudCesEventDetailsV1EventInfoDetailList</a>

---

##### `EventId`<sup>Required</sup> <a name="EventId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventId"></a>

```csharp
public string EventId { get; }
```

- *Type:* string

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventName"></a>

```csharp
public string EventName { get; }
```

- *Type:* string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.eventSource"></a>

```csharp
public string EventSource { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.time"></a>

```csharp
public double Time { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfoOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudCesEventDetailsV1EventInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1EventInfo">DataOpentelekomcloudCesEventDetailsV1EventInfo</a>

---


### DataOpentelekomcloudCesEventDetailsV1MetaDataList <a name="DataOpentelekomcloudCesEventDetailsV1MetaDataList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1MetaDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.get"></a>

```csharp
private DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference <a name="DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.total">Total</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaData">DataOpentelekomcloudCesEventDetailsV1MetaData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Total`<sup>Required</sup> <a name="Total" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.total"></a>

```csharp
public double Total { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaDataOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudCesEventDetailsV1MetaData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventDetailsV1.DataOpentelekomcloudCesEventDetailsV1MetaData">DataOpentelekomcloudCesEventDetailsV1MetaData</a>

---



