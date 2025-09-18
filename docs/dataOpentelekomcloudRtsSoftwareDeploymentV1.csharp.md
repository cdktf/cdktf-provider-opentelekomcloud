# `dataOpentelekomcloudRtsSoftwareDeploymentV1` Submodule <a name="`dataOpentelekomcloudRtsSoftwareDeploymentV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRtsSoftwareDeploymentV1 <a name="DataOpentelekomcloudRtsSoftwareDeploymentV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1 opentelekomcloud_rts_software_deployment_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRtsSoftwareDeploymentV1(Construct Scope, string Id, DataOpentelekomcloudRtsSoftwareDeploymentV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config">DataOpentelekomcloudRtsSoftwareDeploymentV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config">DataOpentelekomcloudRtsSoftwareDeploymentV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetConfigId">ResetConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetServerId">ResetServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetConfigId` <a name="ResetConfigId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetConfigId"></a>

```csharp
private void ResetConfigId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServerId` <a name="ResetServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetServerId"></a>

```csharp
private void ResetServerId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRtsSoftwareDeploymentV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRtsSoftwareDeploymentV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRtsSoftwareDeploymentV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRtsSoftwareDeploymentV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRtsSoftwareDeploymentV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudRtsSoftwareDeploymentV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudRtsSoftwareDeploymentV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudRtsSoftwareDeploymentV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRtsSoftwareDeploymentV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.inputValues">InputValues</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.outputValues">OutputValues</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InputValues`<sup>Required</sup> <a name="InputValues" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.inputValues"></a>

```csharp
public StringMap InputValues { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `OutputValues`<sup>Required</sup> <a name="OutputValues" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.outputValues"></a>

```csharp
public StringMap OutputValues { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRtsSoftwareDeploymentV1Config <a name="DataOpentelekomcloudRtsSoftwareDeploymentV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRtsSoftwareDeploymentV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action = null,
    string ConfigId = null,
    string Id = null,
    string Region = null,
    string ServerId = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#action DataOpentelekomcloudRtsSoftwareDeploymentV1#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.configId">ConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#config_id DataOpentelekomcloudRtsSoftwareDeploymentV1#config_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#id DataOpentelekomcloudRtsSoftwareDeploymentV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#region DataOpentelekomcloudRtsSoftwareDeploymentV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#server_id DataOpentelekomcloudRtsSoftwareDeploymentV1#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#status DataOpentelekomcloudRtsSoftwareDeploymentV1#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#action DataOpentelekomcloudRtsSoftwareDeploymentV1#action}.

---

##### `ConfigId`<sup>Optional</sup> <a name="ConfigId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#config_id DataOpentelekomcloudRtsSoftwareDeploymentV1#config_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#id DataOpentelekomcloudRtsSoftwareDeploymentV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#region DataOpentelekomcloudRtsSoftwareDeploymentV1#region}.

---

##### `ServerId`<sup>Optional</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#server_id DataOpentelekomcloudRtsSoftwareDeploymentV1#server_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareDeploymentV1.DataOpentelekomcloudRtsSoftwareDeploymentV1Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rts_software_deployment_v1#status DataOpentelekomcloudRtsSoftwareDeploymentV1#status}.

---



