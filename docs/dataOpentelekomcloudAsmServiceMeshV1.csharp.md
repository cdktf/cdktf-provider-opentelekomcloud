# `dataOpentelekomcloudAsmServiceMeshV1` Submodule <a name="`dataOpentelekomcloudAsmServiceMeshV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudAsmServiceMeshV1 <a name="DataOpentelekomcloudAsmServiceMeshV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/asm_service_mesh_v1 opentelekomcloud_asm_service_mesh_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1(Construct Scope, string Id, DataOpentelekomcloudAsmServiceMeshV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config">DataOpentelekomcloudAsmServiceMeshV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config">DataOpentelekomcloudAsmServiceMeshV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudAsmServiceMeshV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudAsmServiceMeshV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudAsmServiceMeshV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudAsmServiceMeshV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudAsmServiceMeshV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudAsmServiceMeshV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudAsmServiceMeshV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudAsmServiceMeshV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/asm_service_mesh_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudAsmServiceMeshV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.serviceMeshes">ServiceMeshes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ServiceMeshes`<sup>Required</sup> <a name="ServiceMeshes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.serviceMeshes"></a>

```csharp
public DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList ServiceMeshes { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudAsmServiceMeshV1Config <a name="DataOpentelekomcloudAsmServiceMeshV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/asm_service_mesh_v1#id DataOpentelekomcloudAsmServiceMeshV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/asm_service_mesh_v1#id DataOpentelekomcloudAsmServiceMeshV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes {

};
```


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig {

};
```


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing {

};
```


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.get"></a>

```csharp
private DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.clusterIds">ClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.ipv6Enable">Ipv6Enable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.telemetryConfigTracing">TelemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterIds`<sup>Required</sup> <a name="ClusterIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.clusterIds"></a>

```csharp
public string[] ClusterIds { get; }
```

- *Type:* string[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6Enable`<sup>Required</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.ipv6Enable"></a>

```csharp
public IResolvable Ipv6Enable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.proxyConfig"></a>

```csharp
public DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList ProxyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TelemetryConfigTracing`<sup>Required</sup> <a name="TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.telemetryConfigTracing"></a>

```csharp
public DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList TelemetryConfigTracing { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes</a>

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.get"></a>

```csharp
private DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeInboundPorts">ExcludeInboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeIpRanges">ExcludeIpRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeOutboundPorts">ExcludeOutboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeInboundPorts">IncludeInboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeIpRanges">IncludeIpRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeOutboundPorts">IncludeOutboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInboundPorts`<sup>Required</sup> <a name="ExcludeInboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeInboundPorts"></a>

```csharp
public string ExcludeInboundPorts { get; }
```

- *Type:* string

---

##### `ExcludeIpRanges`<sup>Required</sup> <a name="ExcludeIpRanges" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeIpRanges"></a>

```csharp
public string ExcludeIpRanges { get; }
```

- *Type:* string

---

##### `ExcludeOutboundPorts`<sup>Required</sup> <a name="ExcludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeOutboundPorts"></a>

```csharp
public string ExcludeOutboundPorts { get; }
```

- *Type:* string

---

##### `IncludeInboundPorts`<sup>Required</sup> <a name="IncludeInboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeInboundPorts"></a>

```csharp
public string IncludeInboundPorts { get; }
```

- *Type:* string

---

##### `IncludeIpRanges`<sup>Required</sup> <a name="IncludeIpRanges" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeIpRanges"></a>

```csharp
public string IncludeIpRanges { get; }
```

- *Type:* string

---

##### `IncludeOutboundPorts`<sup>Required</sup> <a name="IncludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeOutboundPorts"></a>

```csharp
public string IncludeOutboundPorts { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig</a>

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.get"></a>

```csharp
private DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr">ZipkinServiceAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort">ZipkinServicePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ZipkinServiceAddr`<sup>Required</sup> <a name="ZipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr"></a>

```csharp
public string ZipkinServiceAddr { get; }
```

- *Type:* string

---

##### `ZipkinServicePort`<sup>Required</sup> <a name="ZipkinServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort"></a>

```csharp
public double ZipkinServicePort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders</a>

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.get"></a>

```csharp
private DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.defaultProviders">DefaultProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.extensionProviders">ExtensionProviders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.randomSamplingPercentage">RandomSamplingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultProviders`<sup>Required</sup> <a name="DefaultProviders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.defaultProviders"></a>

```csharp
public string[] DefaultProviders { get; }
```

- *Type:* string[]

---

##### `ExtensionProviders`<sup>Required</sup> <a name="ExtensionProviders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.extensionProviders"></a>

```csharp
public DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList ExtensionProviders { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList</a>

---

##### `RandomSamplingPercentage`<sup>Required</sup> <a name="RandomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.randomSamplingPercentage"></a>

```csharp
public double RandomSamplingPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing</a>

---



