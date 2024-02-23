# `dataOpentelekomcloudKmsKeyV1` Submodule <a name="`dataOpentelekomcloudKmsKeyV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudKmsKeyV1 <a name="DataOpentelekomcloudKmsKeyV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1 opentelekomcloud_kms_key_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudKmsKeyV1(Construct Scope, string Id, DataOpentelekomcloudKmsKeyV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config">DataOpentelekomcloudKmsKeyV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config">DataOpentelekomcloudKmsKeyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetDefaultKeyFlag">ResetDefaultKeyFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetDomainId">ResetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyAlias">ResetKeyAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyDescription">ResetKeyDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyState">ResetKeyState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetRealm">ResetRealm</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDefaultKeyFlag` <a name="ResetDefaultKeyFlag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetDefaultKeyFlag"></a>

```csharp
private void ResetDefaultKeyFlag()
```

##### `ResetDomainId` <a name="ResetDomainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetDomainId"></a>

```csharp
private void ResetDomainId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyAlias` <a name="ResetKeyAlias" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyAlias"></a>

```csharp
private void ResetKeyAlias()
```

##### `ResetKeyDescription` <a name="ResetKeyDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyDescription"></a>

```csharp
private void ResetKeyDescription()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetKeyState` <a name="ResetKeyState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyState"></a>

```csharp
private void ResetKeyState()
```

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetOrigin"></a>

```csharp
private void ResetOrigin()
```

##### `ResetRealm` <a name="ResetRealm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetRealm"></a>

```csharp
private void ResetRealm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudKmsKeyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudKmsKeyV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudKmsKeyV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudKmsKeyV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudKmsKeyV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudKmsKeyV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudKmsKeyV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudKmsKeyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudKmsKeyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.scheduledDeletionDate">ScheduledDeletionDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.defaultKeyFlagInput">DefaultKeyFlagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyAliasInput">KeyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyDescriptionInput">KeyDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyStateInput">KeyStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.originInput">OriginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.realmInput">RealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.defaultKeyFlag">DefaultKeyFlag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyAlias">KeyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyDescription">KeyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyState">KeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.realm">Realm</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `ScheduledDeletionDate`<sup>Required</sup> <a name="ScheduledDeletionDate" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.scheduledDeletionDate"></a>

```csharp
public string ScheduledDeletionDate { get; }
```

- *Type:* string

---

##### `DefaultKeyFlagInput`<sup>Optional</sup> <a name="DefaultKeyFlagInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.defaultKeyFlagInput"></a>

```csharp
public string DefaultKeyFlagInput { get; }
```

- *Type:* string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyAliasInput`<sup>Optional</sup> <a name="KeyAliasInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyAliasInput"></a>

```csharp
public string KeyAliasInput { get; }
```

- *Type:* string

---

##### `KeyDescriptionInput`<sup>Optional</sup> <a name="KeyDescriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyDescriptionInput"></a>

```csharp
public string KeyDescriptionInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyStateInput`<sup>Optional</sup> <a name="KeyStateInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyStateInput"></a>

```csharp
public string KeyStateInput { get; }
```

- *Type:* string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.originInput"></a>

```csharp
public string OriginInput { get; }
```

- *Type:* string

---

##### `RealmInput`<sup>Optional</sup> <a name="RealmInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.realmInput"></a>

```csharp
public string RealmInput { get; }
```

- *Type:* string

---

##### `DefaultKeyFlag`<sup>Required</sup> <a name="DefaultKeyFlag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.defaultKeyFlag"></a>

```csharp
public string DefaultKeyFlag { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyAlias"></a>

```csharp
public string KeyAlias { get; }
```

- *Type:* string

---

##### `KeyDescription`<sup>Required</sup> <a name="KeyDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyDescription"></a>

```csharp
public string KeyDescription { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyState`<sup>Required</sup> <a name="KeyState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyState"></a>

```csharp
public string KeyState { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.realm"></a>

```csharp
public string Realm { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudKmsKeyV1Config <a name="DataOpentelekomcloudKmsKeyV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudKmsKeyV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultKeyFlag = null,
    string DomainId = null,
    string Id = null,
    string KeyAlias = null,
    string KeyDescription = null,
    string KeyId = null,
    string KeyState = null,
    string Origin = null,
    string Realm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.defaultKeyFlag">DefaultKeyFlag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#default_key_flag DataOpentelekomcloudKmsKeyV1#default_key_flag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.domainId">DomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#domain_id DataOpentelekomcloudKmsKeyV1#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#id DataOpentelekomcloudKmsKeyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyAlias">KeyAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#key_alias DataOpentelekomcloudKmsKeyV1#key_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyDescription">KeyDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#key_description DataOpentelekomcloudKmsKeyV1#key_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#key_id DataOpentelekomcloudKmsKeyV1#key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyState">KeyState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#key_state DataOpentelekomcloudKmsKeyV1#key_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.origin">Origin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#origin DataOpentelekomcloudKmsKeyV1#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.realm">Realm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#realm DataOpentelekomcloudKmsKeyV1#realm}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultKeyFlag`<sup>Optional</sup> <a name="DefaultKeyFlag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.defaultKeyFlag"></a>

```csharp
public string DefaultKeyFlag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#default_key_flag DataOpentelekomcloudKmsKeyV1#default_key_flag}.

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#domain_id DataOpentelekomcloudKmsKeyV1#domain_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#id DataOpentelekomcloudKmsKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyAlias`<sup>Optional</sup> <a name="KeyAlias" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyAlias"></a>

```csharp
public string KeyAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#key_alias DataOpentelekomcloudKmsKeyV1#key_alias}.

---

##### `KeyDescription`<sup>Optional</sup> <a name="KeyDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyDescription"></a>

```csharp
public string KeyDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#key_description DataOpentelekomcloudKmsKeyV1#key_description}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#key_id DataOpentelekomcloudKmsKeyV1#key_id}.

---

##### `KeyState`<sup>Optional</sup> <a name="KeyState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyState"></a>

```csharp
public string KeyState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#key_state DataOpentelekomcloudKmsKeyV1#key_state}.

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.origin"></a>

```csharp
public string Origin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#origin DataOpentelekomcloudKmsKeyV1#origin}.

---

##### `Realm`<sup>Optional</sup> <a name="Realm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.realm"></a>

```csharp
public string Realm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/data-sources/kms_key_v1#realm DataOpentelekomcloudKmsKeyV1#realm}.

---



