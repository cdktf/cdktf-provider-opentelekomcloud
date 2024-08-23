# `dataOpentelekomcloudCsbsBackupV1` Submodule <a name="`dataOpentelekomcloudCsbsBackupV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCsbsBackupV1 <a name="DataOpentelekomcloudCsbsBackupV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1 opentelekomcloud_csbs_backup_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1(Construct Scope, string Id, DataOpentelekomcloudCsbsBackupV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config">DataOpentelekomcloudCsbsBackupV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config">DataOpentelekomcloudCsbsBackupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetBackupName">ResetBackupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetBackupRecordId">ResetBackupRecordId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetVmIp">ResetVmIp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetBackupName` <a name="ResetBackupName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetBackupName"></a>

```csharp
private void ResetBackupName()
```

##### `ResetBackupRecordId` <a name="ResetBackupRecordId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetBackupRecordId"></a>

```csharp
private void ResetBackupRecordId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceName"></a>

```csharp
private void ResetResourceName()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVmIp` <a name="ResetVmIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetVmIp"></a>

```csharp
private void ResetVmIp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCsbsBackupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCsbsBackupV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCsbsBackupV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCsbsBackupV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCsbsBackupV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudCsbsBackupV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCsbsBackupV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCsbsBackupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCsbsBackupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.autoTrigger">AutoTrigger</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.averageSpeed">AverageSpeed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList">DataOpentelekomcloudCsbsBackupV1TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmMetadata">VmMetadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList">DataOpentelekomcloudCsbsBackupV1VmMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.volumeBackups">VolumeBackups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList">DataOpentelekomcloudCsbsBackupV1VolumeBackupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupNameInput">BackupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupRecordIdInput">BackupRecordIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmIpInput">VmIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupName">BackupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupRecordId">BackupRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmIp">VmIp</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutoTrigger`<sup>Required</sup> <a name="AutoTrigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.autoTrigger"></a>

```csharp
public IResolvable AutoTrigger { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AverageSpeed`<sup>Required</sup> <a name="AverageSpeed" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.averageSpeed"></a>

```csharp
public double AverageSpeed { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tags"></a>

```csharp
public DataOpentelekomcloudCsbsBackupV1TagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList">DataOpentelekomcloudCsbsBackupV1TagsList</a>

---

##### `VmMetadata`<sup>Required</sup> <a name="VmMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmMetadata"></a>

```csharp
public DataOpentelekomcloudCsbsBackupV1VmMetadataList VmMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList">DataOpentelekomcloudCsbsBackupV1VmMetadataList</a>

---

##### `VolumeBackups`<sup>Required</sup> <a name="VolumeBackups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.volumeBackups"></a>

```csharp
public DataOpentelekomcloudCsbsBackupV1VolumeBackupsList VolumeBackups { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList">DataOpentelekomcloudCsbsBackupV1VolumeBackupsList</a>

---

##### `BackupNameInput`<sup>Optional</sup> <a name="BackupNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupNameInput"></a>

```csharp
public string BackupNameInput { get; }
```

- *Type:* string

---

##### `BackupRecordIdInput`<sup>Optional</sup> <a name="BackupRecordIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupRecordIdInput"></a>

```csharp
public string BackupRecordIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `VmIpInput`<sup>Optional</sup> <a name="VmIpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmIpInput"></a>

```csharp
public string VmIpInput { get; }
```

- *Type:* string

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupName"></a>

```csharp
public string BackupName { get; }
```

- *Type:* string

---

##### `BackupRecordId`<sup>Required</sup> <a name="BackupRecordId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupRecordId"></a>

```csharp
public string BackupRecordId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VmIp`<sup>Required</sup> <a name="VmIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmIp"></a>

```csharp
public string VmIp { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCsbsBackupV1Config <a name="DataOpentelekomcloudCsbsBackupV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackupName = null,
    string BackupRecordId = null,
    string Id = null,
    string PolicyId = null,
    string Region = null,
    string ResourceId = null,
    string ResourceName = null,
    string ResourceType = null,
    string Status = null,
    object Tags = null,
    string VmIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.backupName">BackupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#backup_name DataOpentelekomcloudCsbsBackupV1#backup_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.backupRecordId">BackupRecordId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#backup_record_id DataOpentelekomcloudCsbsBackupV1#backup_record_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#id DataOpentelekomcloudCsbsBackupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#policy_id DataOpentelekomcloudCsbsBackupV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#region DataOpentelekomcloudCsbsBackupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#resource_id DataOpentelekomcloudCsbsBackupV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#resource_name DataOpentelekomcloudCsbsBackupV1#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#resource_type DataOpentelekomcloudCsbsBackupV1#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#status DataOpentelekomcloudCsbsBackupV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.vmIp">VmIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#vm_ip DataOpentelekomcloudCsbsBackupV1#vm_ip}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackupName`<sup>Optional</sup> <a name="BackupName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.backupName"></a>

```csharp
public string BackupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#backup_name DataOpentelekomcloudCsbsBackupV1#backup_name}.

---

##### `BackupRecordId`<sup>Optional</sup> <a name="BackupRecordId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.backupRecordId"></a>

```csharp
public string BackupRecordId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#backup_record_id DataOpentelekomcloudCsbsBackupV1#backup_record_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#id DataOpentelekomcloudCsbsBackupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#policy_id DataOpentelekomcloudCsbsBackupV1#policy_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#region DataOpentelekomcloudCsbsBackupV1#region}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#resource_id DataOpentelekomcloudCsbsBackupV1#resource_id}.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#resource_name DataOpentelekomcloudCsbsBackupV1#resource_name}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#resource_type DataOpentelekomcloudCsbsBackupV1#resource_type}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#status DataOpentelekomcloudCsbsBackupV1#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#tags DataOpentelekomcloudCsbsBackupV1#tags}

---

##### `VmIp`<sup>Optional</sup> <a name="VmIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.vmIp"></a>

```csharp
public string VmIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#vm_ip DataOpentelekomcloudCsbsBackupV1#vm_ip}.

---

### DataOpentelekomcloudCsbsBackupV1Tags <a name="DataOpentelekomcloudCsbsBackupV1Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1Tags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#key DataOpentelekomcloudCsbsBackupV1#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#value DataOpentelekomcloudCsbsBackupV1#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#key DataOpentelekomcloudCsbsBackupV1#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/data-sources/csbs_backup_v1#value DataOpentelekomcloudCsbsBackupV1#value}.

---

### DataOpentelekomcloudCsbsBackupV1VmMetadata <a name="DataOpentelekomcloudCsbsBackupV1VmMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1VmMetadata {

};
```


### DataOpentelekomcloudCsbsBackupV1VolumeBackups <a name="DataOpentelekomcloudCsbsBackupV1VolumeBackups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1VolumeBackups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCsbsBackupV1TagsList <a name="DataOpentelekomcloudCsbsBackupV1TagsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1TagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.get"></a>

```csharp
private DataOpentelekomcloudCsbsBackupV1TagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOpentelekomcloudCsbsBackupV1TagsOutputReference <a name="DataOpentelekomcloudCsbsBackupV1TagsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1TagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOpentelekomcloudCsbsBackupV1VmMetadataList <a name="DataOpentelekomcloudCsbsBackupV1VmMetadataList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1VmMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.get"></a>

```csharp
private DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference <a name="DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.cloudServiceType">CloudServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.disk">Disk</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.eip">Eip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.ram">Ram</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.vcpus">Vcpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadata">DataOpentelekomcloudCsbsBackupV1VmMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudServiceType`<sup>Required</sup> <a name="CloudServiceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.cloudServiceType"></a>

```csharp
public string CloudServiceType { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.disk"></a>

```csharp
public double Disk { get; }
```

- *Type:* double

---

##### `Eip`<sup>Required</sup> <a name="Eip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.eip"></a>

```csharp
public string Eip { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.ram"></a>

```csharp
public double Ram { get; }
```

- *Type:* double

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.vcpus"></a>

```csharp
public double Vcpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudCsbsBackupV1VmMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadata">DataOpentelekomcloudCsbsBackupV1VmMetadata</a>

---


### DataOpentelekomcloudCsbsBackupV1VolumeBackupsList <a name="DataOpentelekomcloudCsbsBackupV1VolumeBackupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1VolumeBackupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.get"></a>

```csharp
private DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference <a name="DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.averageSpeed">AverageSpeed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.bootable">Bootable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.incremental">Incremental</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeId">SourceVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeName">SourceVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeSize">SourceVolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.spaceSavingRatio">SpaceSavingRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackups">DataOpentelekomcloudCsbsBackupV1VolumeBackups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageSpeed`<sup>Required</sup> <a name="AverageSpeed" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.averageSpeed"></a>

```csharp
public double AverageSpeed { get; }
```

- *Type:* double

---

##### `Bootable`<sup>Required</sup> <a name="Bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.bootable"></a>

```csharp
public IResolvable Bootable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `Incremental`<sup>Required</sup> <a name="Incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.incremental"></a>

```csharp
public IResolvable Incremental { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `SourceVolumeId`<sup>Required</sup> <a name="SourceVolumeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeId"></a>

```csharp
public string SourceVolumeId { get; }
```

- *Type:* string

---

##### `SourceVolumeName`<sup>Required</sup> <a name="SourceVolumeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeName"></a>

```csharp
public string SourceVolumeName { get; }
```

- *Type:* string

---

##### `SourceVolumeSize`<sup>Required</sup> <a name="SourceVolumeSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeSize"></a>

```csharp
public double SourceVolumeSize { get; }
```

- *Type:* double

---

##### `SpaceSavingRatio`<sup>Required</sup> <a name="SpaceSavingRatio" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.spaceSavingRatio"></a>

```csharp
public double SpaceSavingRatio { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudCsbsBackupV1VolumeBackups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackups">DataOpentelekomcloudCsbsBackupV1VolumeBackups</a>

---



