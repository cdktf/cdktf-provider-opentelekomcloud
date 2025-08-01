# `dataOpentelekomcloudS3BucketObject` Submodule <a name="`dataOpentelekomcloudS3BucketObject` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudS3BucketObject <a name="DataOpentelekomcloudS3BucketObject" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object opentelekomcloud_s3_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudS3BucketObject(Construct Scope, string Id, DataOpentelekomcloudS3BucketObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig">DataOpentelekomcloudS3BucketObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig">DataOpentelekomcloudS3BucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.resetVersionId"></a>

```csharp
private void ResetVersionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudS3BucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudS3BucketObject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudS3BucketObject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudS3BucketObject.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudS3BucketObject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudS3BucketObject resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudS3BucketObject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudS3BucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudS3BucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentLength">ContentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.expires">Expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.sseKmsKeyId">SseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.websiteRedirectLocation">WebsiteRedirectLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.rangeInput">RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentLength"></a>

```csharp
public double ContentLength { get; }
```

- *Type:* double

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.expires"></a>

```csharp
public string Expires { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.serverSideEncryption"></a>

```csharp
public string ServerSideEncryption { get; }
```

- *Type:* string

---

##### `SseKmsKeyId`<sup>Required</sup> <a name="SseKmsKeyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.sseKmsKeyId"></a>

```csharp
public string SseKmsKeyId { get; }
```

- *Type:* string

---

##### `WebsiteRedirectLocation`<sup>Required</sup> <a name="WebsiteRedirectLocation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.websiteRedirectLocation"></a>

```csharp
public string WebsiteRedirectLocation { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.rangeInput"></a>

```csharp
public string RangeInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudS3BucketObjectConfig <a name="DataOpentelekomcloudS3BucketObjectConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudS3BucketObjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Key,
    string Id = null,
    string Range = null,
    string VersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#bucket DataOpentelekomcloudS3BucketObject#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#key DataOpentelekomcloudS3BucketObject#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#id DataOpentelekomcloudS3BucketObject#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.range">Range</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#range DataOpentelekomcloudS3BucketObject#range}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#version_id DataOpentelekomcloudS3BucketObject#version_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#bucket DataOpentelekomcloudS3BucketObject#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#key DataOpentelekomcloudS3BucketObject#key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#id DataOpentelekomcloudS3BucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.range"></a>

```csharp
public string Range { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#range DataOpentelekomcloudS3BucketObject#range}.

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudS3BucketObject.DataOpentelekomcloudS3BucketObjectConfig.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/s3_bucket_object#version_id DataOpentelekomcloudS3BucketObject#version_id}.

---



