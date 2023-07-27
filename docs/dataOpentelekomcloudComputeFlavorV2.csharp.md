# `data_opentelekomcloud_compute_flavor_v2`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_compute_flavor_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2).

# `dataOpentelekomcloudComputeFlavorV2` Submodule <a name="`dataOpentelekomcloudComputeFlavorV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeFlavorV2 <a name="DataOpentelekomcloudComputeFlavorV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2 opentelekomcloud_compute_flavor_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeFlavorV2(Construct Scope, string Id, DataOpentelekomcloudComputeFlavorV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config">DataOpentelekomcloudComputeFlavorV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config">DataOpentelekomcloudComputeFlavorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetDisk">ResetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetFlavorId">ResetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetMinDisk">ResetMinDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetMinRam">ResetMinRam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRam">ResetRam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRxTxFactor">ResetRxTxFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetSwap">ResetSwap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetVcpus">ResetVcpus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetDisk"></a>

```csharp
private void ResetDisk()
```

##### `ResetFlavorId` <a name="ResetFlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetFlavorId"></a>

```csharp
private void ResetFlavorId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinDisk` <a name="ResetMinDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetMinDisk"></a>

```csharp
private void ResetMinDisk()
```

##### `ResetMinRam` <a name="ResetMinRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetMinRam"></a>

```csharp
private void ResetMinRam()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRam` <a name="ResetRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRam"></a>

```csharp
private void ResetRam()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetRxTxFactor` <a name="ResetRxTxFactor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetRxTxFactor"></a>

```csharp
private void ResetRxTxFactor()
```

##### `ResetSwap` <a name="ResetSwap" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetSwap"></a>

```csharp
private void ResetSwap()
```

##### `ResetVcpus` <a name="ResetVcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.resetVcpus"></a>

```csharp
private void ResetVcpus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudComputeFlavorV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudComputeFlavorV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudComputeFlavorV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.extraSpecs">ExtraSpecs</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.diskInput">DiskInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minDiskInput">MinDiskInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minRamInput">MinRamInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.ramInput">RamInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.rxTxFactorInput">RxTxFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.swapInput">SwapInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.vcpusInput">VcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.disk">Disk</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.flavorId">FlavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minDisk">MinDisk</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minRam">MinRam</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.ram">Ram</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.rxTxFactor">RxTxFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.swap">Swap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.vcpus">Vcpus</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExtraSpecs`<sup>Required</sup> <a name="ExtraSpecs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.extraSpecs"></a>

```csharp
public StringMap ExtraSpecs { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.diskInput"></a>

```csharp
public double DiskInput { get; }
```

- *Type:* double

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.flavorIdInput"></a>

```csharp
public string FlavorIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MinDiskInput`<sup>Optional</sup> <a name="MinDiskInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minDiskInput"></a>

```csharp
public double MinDiskInput { get; }
```

- *Type:* double

---

##### `MinRamInput`<sup>Optional</sup> <a name="MinRamInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minRamInput"></a>

```csharp
public double MinRamInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RamInput`<sup>Optional</sup> <a name="RamInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.ramInput"></a>

```csharp
public double RamInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `RxTxFactorInput`<sup>Optional</sup> <a name="RxTxFactorInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.rxTxFactorInput"></a>

```csharp
public double RxTxFactorInput { get; }
```

- *Type:* double

---

##### `SwapInput`<sup>Optional</sup> <a name="SwapInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.swapInput"></a>

```csharp
public double SwapInput { get; }
```

- *Type:* double

---

##### `VcpusInput`<sup>Optional</sup> <a name="VcpusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.vcpusInput"></a>

```csharp
public double VcpusInput { get; }
```

- *Type:* double

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.disk"></a>

```csharp
public double Disk { get; }
```

- *Type:* double

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.flavorId"></a>

```csharp
public string FlavorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MinDisk`<sup>Required</sup> <a name="MinDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minDisk"></a>

```csharp
public double MinDisk { get; }
```

- *Type:* double

---

##### `MinRam`<sup>Required</sup> <a name="MinRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.minRam"></a>

```csharp
public double MinRam { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.ram"></a>

```csharp
public double Ram { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `RxTxFactor`<sup>Required</sup> <a name="RxTxFactor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.rxTxFactor"></a>

```csharp
public double RxTxFactor { get; }
```

- *Type:* double

---

##### `Swap`<sup>Required</sup> <a name="Swap" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.swap"></a>

```csharp
public double Swap { get; }
```

- *Type:* double

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.vcpus"></a>

```csharp
public double Vcpus { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeFlavorV2Config <a name="DataOpentelekomcloudComputeFlavorV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudComputeFlavorV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone = null,
    double Disk = null,
    string FlavorId = null,
    string Id = null,
    double MinDisk = null,
    double MinRam = null,
    string Name = null,
    double Ram = null,
    string Region = null,
    string ResourceType = null,
    double RxTxFactor = null,
    double Swap = null,
    double Vcpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#availability_zone DataOpentelekomcloudComputeFlavorV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.disk">Disk</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#disk DataOpentelekomcloudComputeFlavorV2#disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.flavorId">FlavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#flavor_id DataOpentelekomcloudComputeFlavorV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#id DataOpentelekomcloudComputeFlavorV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.minDisk">MinDisk</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#min_disk DataOpentelekomcloudComputeFlavorV2#min_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.minRam">MinRam</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#min_ram DataOpentelekomcloudComputeFlavorV2#min_ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#name DataOpentelekomcloudComputeFlavorV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.ram">Ram</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#ram DataOpentelekomcloudComputeFlavorV2#ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#region DataOpentelekomcloudComputeFlavorV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#resource_type DataOpentelekomcloudComputeFlavorV2#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.rxTxFactor">RxTxFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#rx_tx_factor DataOpentelekomcloudComputeFlavorV2#rx_tx_factor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.swap">Swap</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#swap DataOpentelekomcloudComputeFlavorV2#swap}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.vcpus">Vcpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#vcpus DataOpentelekomcloudComputeFlavorV2#vcpus}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#availability_zone DataOpentelekomcloudComputeFlavorV2#availability_zone}.

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.disk"></a>

```csharp
public double Disk { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#disk DataOpentelekomcloudComputeFlavorV2#disk}.

---

##### `FlavorId`<sup>Optional</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.flavorId"></a>

```csharp
public string FlavorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#flavor_id DataOpentelekomcloudComputeFlavorV2#flavor_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#id DataOpentelekomcloudComputeFlavorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinDisk`<sup>Optional</sup> <a name="MinDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.minDisk"></a>

```csharp
public double MinDisk { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#min_disk DataOpentelekomcloudComputeFlavorV2#min_disk}.

---

##### `MinRam`<sup>Optional</sup> <a name="MinRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.minRam"></a>

```csharp
public double MinRam { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#min_ram DataOpentelekomcloudComputeFlavorV2#min_ram}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#name DataOpentelekomcloudComputeFlavorV2#name}.

---

##### `Ram`<sup>Optional</sup> <a name="Ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.ram"></a>

```csharp
public double Ram { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#ram DataOpentelekomcloudComputeFlavorV2#ram}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#region DataOpentelekomcloudComputeFlavorV2#region}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#resource_type DataOpentelekomcloudComputeFlavorV2#resource_type}.

---

##### `RxTxFactor`<sup>Optional</sup> <a name="RxTxFactor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.rxTxFactor"></a>

```csharp
public double RxTxFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#rx_tx_factor DataOpentelekomcloudComputeFlavorV2#rx_tx_factor}.

---

##### `Swap`<sup>Optional</sup> <a name="Swap" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.swap"></a>

```csharp
public double Swap { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#swap DataOpentelekomcloudComputeFlavorV2#swap}.

---

##### `Vcpus`<sup>Optional</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeFlavorV2.DataOpentelekomcloudComputeFlavorV2Config.property.vcpus"></a>

```csharp
public double Vcpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/data-sources/compute_flavor_v2#vcpus DataOpentelekomcloudComputeFlavorV2#vcpus}.

---



