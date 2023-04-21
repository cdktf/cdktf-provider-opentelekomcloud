# `data_opentelekomcloud_cce_cluster_v3`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_cce_cluster_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3).

# `dataOpentelekomcloudCceClusterV3` Submodule <a name="`dataOpentelekomcloudCceClusterV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCceClusterV3 <a name="DataOpentelekomcloudCceClusterV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3 opentelekomcloud_cce_cluster_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCceClusterV3(Construct Scope, string Id, DataOpentelekomcloudCceClusterV3Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config">DataOpentelekomcloudCceClusterV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config">DataOpentelekomcloudCceClusterV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetClusterType"></a>

```csharp
private void ResetClusterType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCceClusterV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCceClusterV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudCceClusterV3.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.billingMode">BillingMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.certificateClusters">CertificateClusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList">DataOpentelekomcloudCceClusterV3CertificateClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.certificateUsers">CertificateUsers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList">DataOpentelekomcloudCceClusterV3CertificateUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.containerNetworkCidr">ContainerNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.containerNetworkType">ContainerNetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.eniSubnetCidr">EniSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.eniSubnetId">EniSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.external">External</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.externalOtc">ExternalOtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.flavorId">FlavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.highwaySubnetId">HighwaySubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.internal">Internal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.clusterType">ClusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.billingMode"></a>

```csharp
public double BillingMode { get; }
```

- *Type:* double

---

##### `CertificateClusters`<sup>Required</sup> <a name="CertificateClusters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.certificateClusters"></a>

```csharp
public DataOpentelekomcloudCceClusterV3CertificateClustersList CertificateClusters { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList">DataOpentelekomcloudCceClusterV3CertificateClustersList</a>

---

##### `CertificateUsers`<sup>Required</sup> <a name="CertificateUsers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.certificateUsers"></a>

```csharp
public DataOpentelekomcloudCceClusterV3CertificateUsersList CertificateUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList">DataOpentelekomcloudCceClusterV3CertificateUsersList</a>

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `ContainerNetworkCidr`<sup>Required</sup> <a name="ContainerNetworkCidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.containerNetworkCidr"></a>

```csharp
public string ContainerNetworkCidr { get; }
```

- *Type:* string

---

##### `ContainerNetworkType`<sup>Required</sup> <a name="ContainerNetworkType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.containerNetworkType"></a>

```csharp
public string ContainerNetworkType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EniSubnetCidr`<sup>Required</sup> <a name="EniSubnetCidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.eniSubnetCidr"></a>

```csharp
public string EniSubnetCidr { get; }
```

- *Type:* string

---

##### `EniSubnetId`<sup>Required</sup> <a name="EniSubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.eniSubnetId"></a>

```csharp
public string EniSubnetId { get; }
```

- *Type:* string

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.external"></a>

```csharp
public string External { get; }
```

- *Type:* string

---

##### `ExternalOtc`<sup>Required</sup> <a name="ExternalOtc" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.externalOtc"></a>

```csharp
public string ExternalOtc { get; }
```

- *Type:* string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.flavorId"></a>

```csharp
public string FlavorId { get; }
```

- *Type:* string

---

##### `HighwaySubnetId`<sup>Required</sup> <a name="HighwaySubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.highwaySubnetId"></a>

```csharp
public string HighwaySubnetId { get; }
```

- *Type:* string

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.internal"></a>

```csharp
public string Internal { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.clusterTypeInput"></a>

```csharp
public string ClusterTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.clusterType"></a>

```csharp
public string ClusterType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCceClusterV3CertificateClusters <a name="DataOpentelekomcloudCceClusterV3CertificateClusters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCceClusterV3CertificateClusters {

};
```


### DataOpentelekomcloudCceClusterV3CertificateUsers <a name="DataOpentelekomcloudCceClusterV3CertificateUsers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCceClusterV3CertificateUsers {

};
```


### DataOpentelekomcloudCceClusterV3Config <a name="DataOpentelekomcloudCceClusterV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCceClusterV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterType = null,
    string Id = null,
    string Name = null,
    string Region = null,
    string Status = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.clusterType">ClusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#cluster_type DataOpentelekomcloudCceClusterV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#id DataOpentelekomcloudCceClusterV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#name DataOpentelekomcloudCceClusterV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#region DataOpentelekomcloudCceClusterV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#status DataOpentelekomcloudCceClusterV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#vpc_id DataOpentelekomcloudCceClusterV3#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.clusterType"></a>

```csharp
public string ClusterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#cluster_type DataOpentelekomcloudCceClusterV3#cluster_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#id DataOpentelekomcloudCceClusterV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#name DataOpentelekomcloudCceClusterV3#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#region DataOpentelekomcloudCceClusterV3#region}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#status DataOpentelekomcloudCceClusterV3#status}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/cce_cluster_v3#vpc_id DataOpentelekomcloudCceClusterV3#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCceClusterV3CertificateClustersList <a name="DataOpentelekomcloudCceClusterV3CertificateClustersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCceClusterV3CertificateClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.get"></a>

```csharp
private DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference <a name="DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData">CertificateAuthorityData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClusters">DataOpentelekomcloudCceClusterV3CertificateClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityData`<sup>Required</sup> <a name="CertificateAuthorityData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData"></a>

```csharp
public string CertificateAuthorityData { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClustersOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudCceClusterV3CertificateClusters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateClusters">DataOpentelekomcloudCceClusterV3CertificateClusters</a>

---


### DataOpentelekomcloudCceClusterV3CertificateUsersList <a name="DataOpentelekomcloudCceClusterV3CertificateUsersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCceClusterV3CertificateUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.get"></a>

```csharp
private DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference <a name="DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.clientCertificateData">ClientCertificateData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.clientKeyData">ClientKeyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsers">DataOpentelekomcloudCceClusterV3CertificateUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientCertificateData`<sup>Required</sup> <a name="ClientCertificateData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.clientCertificateData"></a>

```csharp
public string ClientCertificateData { get; }
```

- *Type:* string

---

##### `ClientKeyData`<sup>Required</sup> <a name="ClientKeyData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.clientKeyData"></a>

```csharp
public string ClientKeyData { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsersOutputReference.property.internalValue"></a>

```csharp
public DataOpentelekomcloudCceClusterV3CertificateUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceClusterV3.DataOpentelekomcloudCceClusterV3CertificateUsers">DataOpentelekomcloudCceClusterV3CertificateUsers</a>

---



