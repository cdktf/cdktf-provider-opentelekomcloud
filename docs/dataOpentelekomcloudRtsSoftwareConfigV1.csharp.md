# `data_opentelekomcloud_rts_software_config_v1`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_rts_software_config_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/rts_software_config_v1).

# `dataOpentelekomcloudRtsSoftwareConfigV1` Submodule <a name="`dataOpentelekomcloudRtsSoftwareConfigV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRtsSoftwareConfigV1 <a name="DataOpentelekomcloudRtsSoftwareConfigV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/rts_software_config_v1 opentelekomcloud_rts_software_config_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRtsSoftwareConfigV1(Construct Scope, string Id, DataOpentelekomcloudRtsSoftwareConfigV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config">DataOpentelekomcloudRtsSoftwareConfigV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config">DataOpentelekomcloudRtsSoftwareConfigV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRtsSoftwareConfigV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRtsSoftwareConfigV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudRtsSoftwareConfigV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.config">Config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.inputValues">InputValues</a></code> | <code>HashiCorp.Cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.options">Options</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.outputValues">OutputValues</a></code> | <code>HashiCorp.Cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.config"></a>

```csharp
public string Config { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `InputValues`<sup>Required</sup> <a name="InputValues" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.inputValues"></a>

```csharp
public StringMapList InputValues { get; }
```

- *Type:* HashiCorp.Cdktf.StringMapList

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.options"></a>

```csharp
public StringMap Options { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `OutputValues`<sup>Required</sup> <a name="OutputValues" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.outputValues"></a>

```csharp
public StringMapList OutputValues { get; }
```

- *Type:* HashiCorp.Cdktf.StringMapList

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRtsSoftwareConfigV1Config <a name="DataOpentelekomcloudRtsSoftwareConfigV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudRtsSoftwareConfigV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/rts_software_config_v1#id DataOpentelekomcloudRtsSoftwareConfigV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/rts_software_config_v1#name DataOpentelekomcloudRtsSoftwareConfigV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/rts_software_config_v1#region DataOpentelekomcloudRtsSoftwareConfigV1#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/rts_software_config_v1#id DataOpentelekomcloudRtsSoftwareConfigV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/rts_software_config_v1#name DataOpentelekomcloudRtsSoftwareConfigV1#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsSoftwareConfigV1.DataOpentelekomcloudRtsSoftwareConfigV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/rts_software_config_v1#region DataOpentelekomcloudRtsSoftwareConfigV1#region}.

---



