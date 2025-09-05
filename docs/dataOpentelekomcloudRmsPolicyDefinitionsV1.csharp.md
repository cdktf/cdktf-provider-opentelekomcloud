# `dataOpentelekomcloudRmsPolicyDefinitionsV1` Submodule <a name="`dataOpentelekomcloudRmsPolicyDefinitionsV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRmsPolicyDefinitionsV1 <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1 opentelekomcloud_rms_policy_definitions_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyDefinitionsV1(Construct Scope, string Id, DataOpentelekomcloudRmsPolicyDefinitionsV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config">DataOpentelekomcloudRmsPolicyDefinitionsV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config">DataOpentelekomcloudRmsPolicyDefinitionsV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetKeywords">ResetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetPolicyRuleType">ResetPolicyRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetTriggerType">ResetTriggerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeywords` <a name="ResetKeywords" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetKeywords"></a>

```csharp
private void ResetKeywords()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPolicyRuleType` <a name="ResetPolicyRuleType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetPolicyRuleType"></a>

```csharp
private void ResetPolicyRuleType()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```

##### `ResetTriggerType` <a name="ResetTriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetTriggerType"></a>

```csharp
private void ResetTriggerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyDefinitionsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRmsPolicyDefinitionsV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRmsPolicyDefinitionsV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRmsPolicyDefinitionsV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRmsPolicyDefinitionsV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyDefinitionsV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudRmsPolicyDefinitionsV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudRmsPolicyDefinitionsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRmsPolicyDefinitionsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.definitions">Definitions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList">DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.keywordsInput">KeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyRuleTypeInput">PolicyRuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.keywords">Keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyRuleType">PolicyRuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.triggerType">TriggerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Definitions`<sup>Required</sup> <a name="Definitions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.definitions"></a>

```csharp
public DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList Definitions { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList">DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeywordsInput`<sup>Optional</sup> <a name="KeywordsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.keywordsInput"></a>

```csharp
public string[] KeywordsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyRuleTypeInput`<sup>Optional</sup> <a name="PolicyRuleTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyRuleTypeInput"></a>

```csharp
public string PolicyRuleTypeInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.triggerTypeInput"></a>

```csharp
public string TriggerTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.keywords"></a>

```csharp
public string[] Keywords { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyRuleType`<sup>Required</sup> <a name="PolicyRuleType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyRuleType"></a>

```csharp
public string PolicyRuleType { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.triggerType"></a>

```csharp
public string TriggerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRmsPolicyDefinitionsV1Config <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyDefinitionsV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string[] Keywords = null,
    string Name = null,
    string PolicyRuleType = null,
    string PolicyType = null,
    string TriggerType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#id DataOpentelekomcloudRmsPolicyDefinitionsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.keywords">Keywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#keywords DataOpentelekomcloudRmsPolicyDefinitionsV1#keywords}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#name DataOpentelekomcloudRmsPolicyDefinitionsV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.policyRuleType">PolicyRuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#policy_rule_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_rule_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#policy_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.triggerType">TriggerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#trigger_type DataOpentelekomcloudRmsPolicyDefinitionsV1#trigger_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#id DataOpentelekomcloudRmsPolicyDefinitionsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Keywords`<sup>Optional</sup> <a name="Keywords" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.keywords"></a>

```csharp
public string[] Keywords { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#keywords DataOpentelekomcloudRmsPolicyDefinitionsV1#keywords}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#name DataOpentelekomcloudRmsPolicyDefinitionsV1#name}.

---

##### `PolicyRuleType`<sup>Optional</sup> <a name="PolicyRuleType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.policyRuleType"></a>

```csharp
public string PolicyRuleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#policy_rule_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_rule_type}.

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#policy_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_type}.

---

##### `TriggerType`<sup>Optional</sup> <a name="TriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.triggerType"></a>

```csharp
public string TriggerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/data-sources/rms_policy_definitions_v1#trigger_type DataOpentelekomcloudRmsPolicyDefinitionsV1#trigger_type}.

---

### DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.get"></a>

```csharp
private DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.keywords">Keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.parameters">Parameters</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyRule">PolicyRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyRuleType">PolicyRuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.triggerType">TriggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions">DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.keywords"></a>

```csharp
public string[] Keywords { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.parameters"></a>

```csharp
public StringMap Parameters { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `PolicyRule`<sup>Required</sup> <a name="PolicyRule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyRule"></a>

```csharp
public string PolicyRule { get; }
```

- *Type:* string

---

##### `PolicyRuleType`<sup>Required</sup> <a name="PolicyRuleType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyRuleType"></a>

```csharp
public string PolicyRuleType { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.triggerType"></a>

```csharp
public string TriggerType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions">DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions</a>

---



