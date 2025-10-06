# `dataOpentelekomcloudPrivateNatSnatRuleV3` Submodule <a name="`dataOpentelekomcloudPrivateNatSnatRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudPrivateNatSnatRuleV3 <a name="DataOpentelekomcloudPrivateNatSnatRuleV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/private_nat_snat_rule_v3 opentelekomcloud_private_nat_snat_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatSnatRuleV3(Construct Scope, string Id, DataOpentelekomcloudPrivateNatSnatRuleV3Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config">DataOpentelekomcloudPrivateNatSnatRuleV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config">DataOpentelekomcloudPrivateNatSnatRuleV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatSnatRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudPrivateNatSnatRuleV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudPrivateNatSnatRuleV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudPrivateNatSnatRuleV3.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudPrivateNatSnatRuleV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatSnatRuleV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudPrivateNatSnatRuleV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudPrivateNatSnatRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/private_nat_snat_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudPrivateNatSnatRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.snatRules">SnatRules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `SnatRules`<sup>Required</sup> <a name="SnatRules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.snatRules"></a>

```csharp
public DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList SnatRules { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudPrivateNatSnatRuleV3Config <a name="DataOpentelekomcloudPrivateNatSnatRuleV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatSnatRuleV3Config {
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
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/private_nat_snat_rule_v3#id DataOpentelekomcloudPrivateNatSnatRuleV3#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/private_nat_snat_rule_v3#id DataOpentelekomcloudPrivateNatSnatRuleV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules {

};
```


### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.get"></a>

```csharp
private DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.transitIpAssociations">TransitIpAssociations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.transitIpIds">TransitIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.virsubnetId">VirsubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.enterpriseProjectId"></a>

```csharp
public string EnterpriseProjectId { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TransitIpAssociations`<sup>Required</sup> <a name="TransitIpAssociations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.transitIpAssociations"></a>

```csharp
public DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList TransitIpAssociations { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList</a>

---

##### `TransitIpIds`<sup>Required</sup> <a name="TransitIpIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.transitIpIds"></a>

```csharp
public string[] TransitIpIds { get; }
```

- *Type:* string[]

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `VirsubnetId`<sup>Required</sup> <a name="VirsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.virsubnetId"></a>

```csharp
public string VirsubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules</a>

---


### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.get"></a>

```csharp
private DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.transitIpAddress">TransitIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.transitIpId">TransitIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransitIpAddress`<sup>Required</sup> <a name="TransitIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.transitIpAddress"></a>

```csharp
public string TransitIpAddress { get; }
```

- *Type:* string

---

##### `TransitIpId`<sup>Required</sup> <a name="TransitIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.transitIpId"></a>

```csharp
public string TransitIpId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations</a>

---



