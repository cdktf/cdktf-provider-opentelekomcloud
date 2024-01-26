# `dataOpentelekomcloudCbrBackupIdsV3` Submodule <a name="`dataOpentelekomcloudCbrBackupIdsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCbrBackupIdsV3 <a name="DataOpentelekomcloudCbrBackupIdsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3 opentelekomcloud_cbr_backup_ids_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCbrBackupIdsV3(Construct Scope, string Id, DataOpentelekomcloudCbrBackupIdsV3Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config">DataOpentelekomcloudCbrBackupIdsV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config">DataOpentelekomcloudCbrBackupIdsV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetCheckpointId">ResetCheckpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceAz">ResetResourceAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCheckpointId` <a name="ResetCheckpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetCheckpointId"></a>

```csharp
private void ResetCheckpointId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageType` <a name="ResetImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetImageType"></a>

```csharp
private void ResetImageType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParentId` <a name="ResetParentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetParentId"></a>

```csharp
private void ResetParentId()
```

##### `ResetResourceAz` <a name="ResetResourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceAz"></a>

```csharp
private void ResetResourceAz()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceName"></a>

```csharp
private void ResetResourceName()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetVaultId` <a name="ResetVaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetVaultId"></a>

```csharp
private void ResetVaultId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCbrBackupIdsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCbrBackupIdsV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCbrBackupIdsV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCbrBackupIdsV3.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCbrBackupIdsV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudCbrBackupIdsV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCbrBackupIdsV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCbrBackupIdsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCbrBackupIdsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.checkpointIdInput">CheckpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceAzInput">ResourceAzInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.checkpointId">CheckpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceAz">ResourceAz</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `CheckpointIdInput`<sup>Optional</sup> <a name="CheckpointIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.checkpointIdInput"></a>

```csharp
public string CheckpointIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `ResourceAzInput`<sup>Optional</sup> <a name="ResourceAzInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceAzInput"></a>

```csharp
public string ResourceAzInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `CheckpointId`<sup>Required</sup> <a name="CheckpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.checkpointId"></a>

```csharp
public string CheckpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `ResourceAz`<sup>Required</sup> <a name="ResourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceAz"></a>

```csharp
public string ResourceAz { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCbrBackupIdsV3Config <a name="DataOpentelekomcloudCbrBackupIdsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCbrBackupIdsV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CheckpointId = null,
    string Id = null,
    string ImageType = null,
    string Name = null,
    string ParentId = null,
    string ResourceAz = null,
    string ResourceId = null,
    string ResourceName = null,
    string ResourceType = null,
    string Status = null,
    string VaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.checkpointId">CheckpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#checkpoint_id DataOpentelekomcloudCbrBackupIdsV3#checkpoint_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#id DataOpentelekomcloudCbrBackupIdsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.imageType">ImageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#image_type DataOpentelekomcloudCbrBackupIdsV3#image_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#name DataOpentelekomcloudCbrBackupIdsV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.parentId">ParentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#parent_id DataOpentelekomcloudCbrBackupIdsV3#parent_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceAz">ResourceAz</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#resource_az DataOpentelekomcloudCbrBackupIdsV3#resource_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#resource_id DataOpentelekomcloudCbrBackupIdsV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#resource_name DataOpentelekomcloudCbrBackupIdsV3#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#resource_type DataOpentelekomcloudCbrBackupIdsV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#status DataOpentelekomcloudCbrBackupIdsV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#vault_id DataOpentelekomcloudCbrBackupIdsV3#vault_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CheckpointId`<sup>Optional</sup> <a name="CheckpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.checkpointId"></a>

```csharp
public string CheckpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#checkpoint_id DataOpentelekomcloudCbrBackupIdsV3#checkpoint_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#id DataOpentelekomcloudCbrBackupIdsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#image_type DataOpentelekomcloudCbrBackupIdsV3#image_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#name DataOpentelekomcloudCbrBackupIdsV3#name}.

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#parent_id DataOpentelekomcloudCbrBackupIdsV3#parent_id}.

---

##### `ResourceAz`<sup>Optional</sup> <a name="ResourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceAz"></a>

```csharp
public string ResourceAz { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#resource_az DataOpentelekomcloudCbrBackupIdsV3#resource_az}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#resource_id DataOpentelekomcloudCbrBackupIdsV3#resource_id}.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#resource_name DataOpentelekomcloudCbrBackupIdsV3#resource_name}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#resource_type DataOpentelekomcloudCbrBackupIdsV3#resource_type}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#status DataOpentelekomcloudCbrBackupIdsV3#status}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/data-sources/cbr_backup_ids_v3#vault_id DataOpentelekomcloudCbrBackupIdsV3#vault_id}.

---



