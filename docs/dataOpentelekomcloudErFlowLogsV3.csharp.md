# `dataOpentelekomcloudErFlowLogsV3` Submodule <a name="`dataOpentelekomcloudErFlowLogsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudErFlowLogsV3 <a name="DataOpentelekomcloudErFlowLogsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3 opentelekomcloud_er_flow_logs_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudErFlowLogsV3(Construct Scope, string Id, DataOpentelekomcloudErFlowLogsV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config">DataOpentelekomcloudErFlowLogsV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config">DataOpentelekomcloudErFlowLogsV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetFlowLogId">ResetFlowLogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogGroupId">ResetLogGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogStreamId">ResetLogStreamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFlowLogId` <a name="ResetFlowLogId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetFlowLogId"></a>

```csharp
private void ResetFlowLogId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogGroupId` <a name="ResetLogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogGroupId"></a>

```csharp
private void ResetLogGroupId()
```

##### `ResetLogStreamId` <a name="ResetLogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogStreamId"></a>

```csharp
private void ResetLogStreamId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudErFlowLogsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudErFlowLogsV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudErFlowLogsV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudErFlowLogsV3.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudErFlowLogsV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudErFlowLogsV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudErFlowLogsV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudErFlowLogsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudErFlowLogsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogs">FlowLogs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList">DataOpentelekomcloudErFlowLogsV3FlowLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabledInput">EnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogIdInput">FlowLogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamIdInput">LogStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabled">Enabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogId">FlowLogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamId">LogStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FlowLogs`<sup>Required</sup> <a name="FlowLogs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogs"></a>

```csharp
public DataOpentelekomcloudErFlowLogsV3FlowLogsList FlowLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList">DataOpentelekomcloudErFlowLogsV3FlowLogsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabledInput"></a>

```csharp
public string EnabledInput { get; }
```

- *Type:* string

---

##### `FlowLogIdInput`<sup>Optional</sup> <a name="FlowLogIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogIdInput"></a>

```csharp
public string FlowLogIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupIdInput"></a>

```csharp
public string LogGroupIdInput { get; }
```

- *Type:* string

---

##### `LogStreamIdInput`<sup>Optional</sup> <a name="LogStreamIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamIdInput"></a>

```csharp
public string LogStreamIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabled"></a>

```csharp
public string Enabled { get; }
```

- *Type:* string

---

##### `FlowLogId`<sup>Required</sup> <a name="FlowLogId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogId"></a>

```csharp
public string FlowLogId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamId"></a>

```csharp
public string LogStreamId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudErFlowLogsV3Config <a name="DataOpentelekomcloudErFlowLogsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudErFlowLogsV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceId,
    string Enabled = null,
    string FlowLogId = null,
    string Id = null,
    string LogGroupId = null,
    string LogStreamId = null,
    string Name = null,
    string ResourceId = null,
    string ResourceType = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#instance_id DataOpentelekomcloudErFlowLogsV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.enabled">Enabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#enabled DataOpentelekomcloudErFlowLogsV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.flowLogId">FlowLogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#flow_log_id DataOpentelekomcloudErFlowLogsV3#flow_log_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#id DataOpentelekomcloudErFlowLogsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logGroupId">LogGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#log_group_id DataOpentelekomcloudErFlowLogsV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logStreamId">LogStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#log_stream_id DataOpentelekomcloudErFlowLogsV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#name DataOpentelekomcloudErFlowLogsV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#resource_id DataOpentelekomcloudErFlowLogsV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#resource_type DataOpentelekomcloudErFlowLogsV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#status DataOpentelekomcloudErFlowLogsV3#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#instance_id DataOpentelekomcloudErFlowLogsV3#instance_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.enabled"></a>

```csharp
public string Enabled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#enabled DataOpentelekomcloudErFlowLogsV3#enabled}.

---

##### `FlowLogId`<sup>Optional</sup> <a name="FlowLogId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.flowLogId"></a>

```csharp
public string FlowLogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#flow_log_id DataOpentelekomcloudErFlowLogsV3#flow_log_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#id DataOpentelekomcloudErFlowLogsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogGroupId`<sup>Optional</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logGroupId"></a>

```csharp
public string LogGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#log_group_id DataOpentelekomcloudErFlowLogsV3#log_group_id}.

---

##### `LogStreamId`<sup>Optional</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logStreamId"></a>

```csharp
public string LogStreamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#log_stream_id DataOpentelekomcloudErFlowLogsV3#log_stream_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#name DataOpentelekomcloudErFlowLogsV3#name}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#resource_id DataOpentelekomcloudErFlowLogsV3#resource_id}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#resource_type DataOpentelekomcloudErFlowLogsV3#resource_type}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/er_flow_logs_v3#status DataOpentelekomcloudErFlowLogsV3#status}.

---

### DataOpentelekomcloudErFlowLogsV3FlowLogs <a name="DataOpentelekomcloudErFlowLogsV3FlowLogs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudErFlowLogsV3FlowLogs {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudErFlowLogsV3FlowLogsList <a name="DataOpentelekomcloudErFlowLogsV3FlowLogsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudErFlowLogsV3FlowLogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.get"></a>

```csharp
private DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference <a name="DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStoreType">LogStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStreamId">LogStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs">DataOpentelekomcloudErFlowLogsV3FlowLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogStoreType`<sup>Required</sup> <a name="LogStoreType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStoreType"></a>

```csharp
public string LogStoreType { get; }
```

- *Type:* string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStreamId"></a>

```csharp
public string LogStreamId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudErFlowLogsV3FlowLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs">DataOpentelekomcloudErFlowLogsV3FlowLogs</a>

---



