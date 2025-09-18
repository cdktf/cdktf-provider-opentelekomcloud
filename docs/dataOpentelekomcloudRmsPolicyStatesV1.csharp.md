# `dataOpentelekomcloudRmsPolicyStatesV1` Submodule <a name="`dataOpentelekomcloudRmsPolicyStatesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRmsPolicyStatesV1 <a name="DataOpentelekomcloudRmsPolicyStatesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1 opentelekomcloud_rms_policy_states_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyStatesV1(Construct Scope, string Id, DataOpentelekomcloudRmsPolicyStatesV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config">DataOpentelekomcloudRmsPolicyStatesV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config">DataOpentelekomcloudRmsPolicyStatesV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetComplianceState">ResetComplianceState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetPolicyAssignmentId">ResetPolicyAssignmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceName">ResetResourceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetComplianceState` <a name="ResetComplianceState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetComplianceState"></a>

```csharp
private void ResetComplianceState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyAssignmentId` <a name="ResetPolicyAssignmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetPolicyAssignmentId"></a>

```csharp
private void ResetPolicyAssignmentId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceName"></a>

```csharp
private void ResetResourceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyStatesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRmsPolicyStatesV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRmsPolicyStatesV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRmsPolicyStatesV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRmsPolicyStatesV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyStatesV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudRmsPolicyStatesV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudRmsPolicyStatesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRmsPolicyStatesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.states">States</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList">DataOpentelekomcloudRmsPolicyStatesV1StatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceStateInput">ComplianceStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentIdInput">PolicyAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceState">ComplianceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `States`<sup>Required</sup> <a name="States" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.states"></a>

```csharp
public DataOpentelekomcloudRmsPolicyStatesV1StatesList States { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList">DataOpentelekomcloudRmsPolicyStatesV1StatesList</a>

---

##### `ComplianceStateInput`<sup>Optional</sup> <a name="ComplianceStateInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceStateInput"></a>

```csharp
public string ComplianceStateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyAssignmentIdInput`<sup>Optional</sup> <a name="PolicyAssignmentIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentIdInput"></a>

```csharp
public string PolicyAssignmentIdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceState"></a>

```csharp
public string ComplianceState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentId"></a>

```csharp
public string PolicyAssignmentId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRmsPolicyStatesV1Config <a name="DataOpentelekomcloudRmsPolicyStatesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyStatesV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComplianceState = null,
    string Id = null,
    string PolicyAssignmentId = null,
    string ResourceId = null,
    string ResourceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.complianceState">ComplianceState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#compliance_state DataOpentelekomcloudRmsPolicyStatesV1#compliance_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#id DataOpentelekomcloudRmsPolicyStatesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#policy_assignment_id DataOpentelekomcloudRmsPolicyStatesV1#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#resource_id DataOpentelekomcloudRmsPolicyStatesV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#resource_name DataOpentelekomcloudRmsPolicyStatesV1#resource_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComplianceState`<sup>Optional</sup> <a name="ComplianceState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.complianceState"></a>

```csharp
public string ComplianceState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#compliance_state DataOpentelekomcloudRmsPolicyStatesV1#compliance_state}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#id DataOpentelekomcloudRmsPolicyStatesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyAssignmentId`<sup>Optional</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.policyAssignmentId"></a>

```csharp
public string PolicyAssignmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#policy_assignment_id DataOpentelekomcloudRmsPolicyStatesV1#policy_assignment_id}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#resource_id DataOpentelekomcloudRmsPolicyStatesV1#resource_id}.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/rms_policy_states_v1#resource_name DataOpentelekomcloudRmsPolicyStatesV1#resource_name}.

---

### DataOpentelekomcloudRmsPolicyStatesV1States <a name="DataOpentelekomcloudRmsPolicyStatesV1States" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyStatesV1States {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudRmsPolicyStatesV1StatesList <a name="DataOpentelekomcloudRmsPolicyStatesV1StatesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyStatesV1StatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.get"></a>

```csharp
private DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference <a name="DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.complianceState">ComplianceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.evaluationTime">EvaluationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentName">PolicyAssignmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.regionId">RegionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceProvider">ResourceProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.triggerType">TriggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States">DataOpentelekomcloudRmsPolicyStatesV1States</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.complianceState"></a>

```csharp
public string ComplianceState { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EvaluationTime`<sup>Required</sup> <a name="EvaluationTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.evaluationTime"></a>

```csharp
public string EvaluationTime { get; }
```

- *Type:* string

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentId"></a>

```csharp
public string PolicyAssignmentId { get; }
```

- *Type:* string

---

##### `PolicyAssignmentName`<sup>Required</sup> <a name="PolicyAssignmentName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentName"></a>

```csharp
public string PolicyAssignmentName { get; }
```

- *Type:* string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyDefinitionId"></a>

```csharp
public string PolicyDefinitionId { get; }
```

- *Type:* string

---

##### `RegionId`<sup>Required</sup> <a name="RegionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.regionId"></a>

```csharp
public string RegionId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceProvider`<sup>Required</sup> <a name="ResourceProvider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceProvider"></a>

```csharp
public string ResourceProvider { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.triggerType"></a>

```csharp
public string TriggerType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudRmsPolicyStatesV1States InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States">DataOpentelekomcloudRmsPolicyStatesV1States</a>

---



